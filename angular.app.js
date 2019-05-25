angular.module('hypervideoApp', [])
  .controller('TimingController', function($scope) {
    var objects = this;
    
    objects.angulardocument = document;

    objects.charaktere = vDataCharaktere; // siehe annotations.js
    objects.currentCharakter = objects.charaktere[0];
    
    objects.zusatzinfos = vDataZusatzinfos; // siehe annotations.js
    objects.currentZusatzinfo = objects.zusatzinfos[0];
	
	objects.projektbeschreibung = vDataProjektbeschreibung; // siehe annotations.js
    
    objects.checkTime = function(vSeconds) {
        checkTimeForObject(objects.charaktere, vSeconds);
        checkTimeForObject(objects.zusatzinfos, vSeconds);
    };
    
    function checkTimeForObject(vObject, vSeconds) {
        vSeconds = parseFloat(vSeconds);
        for (var i = 0; i < vObject.length; i++) {
            vObject[i].visible = false;
            for (var j = 0; j < vObject[i].timing.length; j++) {
                var timing = vObject[i].timing[j];
                if (vSeconds >= timing.start && vSeconds <= timing.end) {
                    vObject[i].visible = true;
                }
            }
        }
    }
    
    $scope.$watch('currentTime', function(aNewValue, aOldValue) {
        if (aNewValue !== aOldValue) {
            objects.checkTime(aNewValue);
        }
    });
	
	$scope.gethtml = function(t) {
		return "annotations/" + t.html;
	}
	
	$scope.isFullscreen = function() {
		var isFullscreen = document.fullscreenElement != null || document.webkitFullscreenElement != null || document.mozFullScreenElement != null || document.msFullscreenElement != null || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
		
		if (isFullscreen) { // Fullscreen-Hack fuer IE und Safari
			document.getElementById("videosection").style.maxWidth = "none";
		} else {
			document.getElementById("videosection").style.maxWidth = "860px";
		}
		
		return isFullscreen;
	}
	
	$scope.isFullscreenForbidden = function() {
		// return true bei iPhone Safari
		if (/iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(navigator.userAgent)) {
			return true;
		}
		
		return false;
	}

  })
  .directive('docs', function () {
    return {
        scope: {
            doc: "=doc"
        },
        link: function (scope, element) {
			if (angular.isDefined(scope.doc)
				&& angular.isDefined(scope.doc.docid)
				&& scope.doc.docid !== "") {
				element.replaceWith(
					'<iframe src="'
					+ scope.doc.docid
					+ '?embedded=true" width="100%" height="'
					+ scope.doc.height
					+ 'px"></iframe>');
			} else {
				element.replaceWith("");
			}
        }
    }
  })
  .directive('hypervideo', function ($window) {
    return {
        scope: {
            videoCurrentTime: "=videoCurrentTime"
        },
        controller: function ($scope, $element) {
            $scope.onTimeUpdate = function () {
                $scope.$apply(function () {
                    $scope.videoCurrentTime = $element[0].currentTime;
                });
            }
        },
        link: function (scope, elm) {
            elm.bind('timeupdate', scope.onTimeUpdate);
        }
    }
  });