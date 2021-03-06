// Google BSD license http://code.google.com/google_bsd_license.html
// Copyright 2011 Google Inc. johnjbarton@google.com

// A traceur RemoteWebPageProject that adds tracing to every compile

function QPProject(url) {
  RemoteWebPageProject.call(this, url);
  // FIXME override parent property,
  this.reporter_ = new QPErrorReporter();
   traceur.options.setFromObject({
      linearize: true,
      sourceMaps: true
    });
}

QPProject.prototype = Object.create(RemoteWebPageProject.prototype);

