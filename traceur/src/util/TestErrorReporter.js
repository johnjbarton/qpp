// Copyright 2012 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

traceur.define('util', function() {
  'use strict';

  var ErrorReporter = traceur.util.ErrorReporter;

  /**
   * An error reporter that is used with the tests. It doesn't output anything
   * to the console but it does keep track of reported errors
   */
  function TestErrorReporter() {
    this.errors = [];
  }

  TestErrorReporter.prototype = traceur.createObject(
      ErrorReporter.prototype, {
    reportMessageInternal: function(location, kind, format, args) {
      if (kind !== 'error')
        return;
      this.errors.push(ErrorReporter.format(location, format, args));
    },

    hasMatchingError: function(expected) {
      return this.errors.some(function(error) {
        return error.indexOf(expected) !== -1;
      });
    }
  });

  return {
    TestErrorReporter: TestErrorReporter
  };
});
