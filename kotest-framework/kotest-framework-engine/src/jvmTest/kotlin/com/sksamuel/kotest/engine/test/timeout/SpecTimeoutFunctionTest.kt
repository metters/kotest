package com.sksamuel.kotest.engine.test.timeout

import io.kotest.core.spec.style.FunSpec
import io.kotest.core.spec.style.funSpec
import kotlinx.coroutines.delay
import kotlin.time.Duration

private val factory = funSpec {
   test("long running test") {
      delay(Duration.hours(10))
   }
}

/**
 * Tests timeouts at the spec level (by function override) should be applied.
 */
class SpecTimeoutFunctionTest : FunSpec() {

   override fun timeout(): Long = Duration.milliseconds(10).inWholeMilliseconds

   init {
      extension(expectFailureExtension)

      test("should timeout from spec setting") {
         delay(Duration.hours(10))
      }

      // should apply to factories too
      include(factory)
   }
}