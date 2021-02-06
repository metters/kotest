package com.sksamuel.kotest.assertions.until

import io.kotest.assertions.until.FibonacciInterval
import io.kotest.assertions.until.fibonacci
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.comparables.shouldBeGreaterThan
import io.kotest.matchers.comparables.shouldBeLessThan
import io.kotest.matchers.shouldBe
import kotlin.time.minutes

class FibonacciIntervalTest : FunSpec() {

   init {
      test("fib correctness") {
         fibonacci(0) shouldBe 0
         fibonacci(1) shouldBe 1
         fibonacci(2) shouldBe 1
         fibonacci(3) shouldBe 2
         fibonacci(4) shouldBe 3
         fibonacci(5) shouldBe 5
         fibonacci(6) shouldBe 8
         fibonacci(7) shouldBe 13
      }

      test("fibonacci interval should have a reasonable default cap") {
         val cap = FibonacciInterval.defaultCap
         val default = 10.minutes.fibonacci()
         val unbounded = 10.minutes.fibonacci(null)

         val first = 0
         val last = 20

         unbounded.next(first) shouldBeLessThan cap
         unbounded.next(last) shouldBeGreaterThan cap

         for (i in first..last) {
            val u = unbounded.next(i)
            val d = default.next(i)

            if (u < cap) {
               d shouldBe u
            } else {
               d shouldBe cap
               u shouldBeGreaterThan cap
            }
         }
      }

      test("fibonacci interval should respect user specified cap") {
         val cap = FibonacciInterval.defaultCap.plus(15.minutes)
         val bounded = 10.minutes.fibonacci(cap)
         val unbounded = 10.minutes.fibonacci(null)

         val first = 0
         val last = 20

         unbounded.next(first) shouldBeLessThan cap
         unbounded.next(last) shouldBeGreaterThan cap

         for (i in first..last) {
            val u = unbounded.next(i)
            val b = bounded.next(i)

            if (u < cap) {
               b shouldBe u
            } else {
               b shouldBe cap
               u shouldBeGreaterThan cap
            }
         }
      }
   }
}
