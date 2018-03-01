angular.module('hypervideoApp', ['ngMap'])
  .controller('TimingController', function($scope) {
    var objects = this;
    
    objects.angulardocument = document;

    objects.charaktere = vDataCharaktere; // siehe annotations.js
    objects.currentCharakter = objects.charaktere[0];
    
    objects.orte = vDataOrte; // siehe annotations.js
    objects.currentOrt = objects.orte[0];
	
	objects.showCustomMarker = function(vMapsElement, vOrt) {
		objects.currentOrt = vOrt;
		objects.angulardocument.getElementById('aktuellerortbutton').click();
	};
    
    objects.zusatzinfos = vDataZusatzinfos; // siehe annotations.js
    objects.currentZusatzinfo = objects.zusatzinfos[0];
	
	objects.projektbeschreibung = vDataProjektbeschreibung; // siehe annotations.js
    
    objects.checkTime = function(vSeconds) {
        checkTimeForObject(objects.charaktere, vSeconds);
        checkTimeForObject(objects.orte, vSeconds);
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