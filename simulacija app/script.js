(function() {

	var app = angular.module('SimulacijaIspita', []);

	var MainController = function(
		$scope) {

		$scope.professorKnjiga = 0;
		$scope.professorNastava = 0;
		$scope.professorDL = 0;
		$scope.professorVideo = 0;
		$scope.student1Knjiga = 0;
		$scope.student1DLMaterijali = 0;
		$scope.student1VideoMaterijali = 0;
		$scope.student1Prisustvo = 0;
		$scope.student1Koncentracija = 0;

		$scope.student2Knjiga = 0;
		$scope.student2DLMaterijali = 0;
		$scope.student2VideoMaterijali = 0;
		$scope.student2Prisustvo = 0;
		$scope.student2Koncentracija = 0;

		$scope.randomIspit = function () {
		$scope.professorKnjiga = Math.floor((Math.random() * 10) + 1);
		$scope.professorNastava = Math.floor((Math.random() * 10) + 1);
		$scope.professorDL = Math.floor((Math.random() * 10) + 1);
		$scope.professorVideo = Math.floor((Math.random() * 10) + 1);
		$scope.startujSimulaciju();
		$scope.student1SimuliranjeIspita($scope.student1DLMaterijali,$scope.student1VideoMaterijali,$scope.student1Prisustvo,$scope.student1Koncentracija,$scope.student1Knjiga);
		$scope.student2SimuliranjeIspita($scope.student2DLMaterijali,$scope.student2VideoMaterijali,$scope.student2Prisustvo,$scope.student2Koncentracija,$scope.student2Knjiga);
		};

		$scope.randomStudent2 = function () {
		$scope.student2Knjiga =  Math.floor((Math.random() * 10) + 1);
		$scope.student2DLMaterijali =  Math.floor((Math.random() * 10) + 1);
		$scope.student2VideoMaterijali =  Math.floor((Math.random() * 10) + 1);
		$scope.student2Prisustvo =  Math.floor((Math.random() * 10) + 1);
		$scope.student2Koncentracija =  Math.floor((Math.random() * 10) + 1);
		$scope.student2SimuliranjeIspita($scope.student2DLMaterijali,$scope.student2VideoMaterijali,$scope.student2Prisustvo,$scope.student2Koncentracija,$scope.student2Knjiga);
		};
		$scope.randomStudent1 = function () {
		$scope.student1Knjiga = Math.floor((Math.random() * 10) + 1);
		$scope.student1DLMaterijali = Math.floor((Math.random() * 10) + 1);
		$scope.student1VideoMaterijali = Math.floor((Math.random() * 10) + 1);
		$scope.student1Prisustvo = Math.floor((Math.random() * 10) + 1);
		$scope.student1Koncentracija = Math.floor((Math.random() * 10) + 1);
		$scope.student1SimuliranjeIspita($scope.student1DLMaterijali,$scope.student1VideoMaterijali,$scope.student1Prisustvo,$scope.student1Koncentracija,$scope.student1Knjiga);
		};

		$scope.pokreniRandomSimulaciju = function () {

		$scope.professorKnjiga = Math.floor((Math.random() * 10) + 1);
		$scope.professorNastava = Math.floor((Math.random() * 10) + 1);
		$scope.professorDL = Math.floor((Math.random() * 10) + 1);
		$scope.professorVideo = Math.floor((Math.random() * 10) + 1);
		$scope.startujSimulaciju();

		var genersisRandomStudente = function () {

		$scope.student1Knjiga = Math.floor((Math.random() * 10) + 1);
		$scope.student1DLMaterijali = Math.floor((Math.random() * 10) + 1);
		$scope.student1VideoMaterijali = Math.floor((Math.random() * 10) + 1);
		$scope.student1Prisustvo = Math.floor((Math.random() * 10) + 1);
		$scope.student1Koncentracija = Math.floor((Math.random() * 10) + 1);
		$scope.student1SimuliranjeIspita($scope.student1DLMaterijali,$scope.student1VideoMaterijali,$scope.student1Prisustvo,$scope.student1Koncentracija,$scope.student1Knjiga);

		$scope.student2Knjiga =  Math.floor((Math.random() * 10) + 1);
		$scope.student2DLMaterijali =  Math.floor((Math.random() * 10) + 1);
		$scope.student2VideoMaterijali =  Math.floor((Math.random() * 10) + 1);
		$scope.student2Prisustvo =  Math.floor((Math.random() * 10) + 1);
		$scope.student2Koncentracija =  Math.floor((Math.random() * 10) + 1);
		$scope.student2SimuliranjeIspita($scope.student2DLMaterijali,$scope.student2VideoMaterijali,$scope.student2Prisustvo,$scope.student2Koncentracija,$scope.student2Knjiga);
		}

		genersisRandomStudente();

			
		}

		$scope.student1SimuliranjeIspita = function (dl, video, prisustvo, koncentracija, knjiga) {
			$scope.hideControls = true;
			$scope.showResults = true;

			var ucenjeKnjiga = $scope.ispitKnjiga  * studentKalkulacijaUcenja(knjiga);
			var ucenjeDL = $scope.ispitDL * studentKalkulacijaUcenja(dl);
			var ucenjeVideo = $scope.ispitVideo * studentKalkulacijaUcenja(video);
			var nastava = (prisustvo+koncentracija)/2;
			var nastavaUcenje = $scope.ispitNastava * studentKalkulacijaUcenja(nastava);

			if(prisustvo === 0 && koncentracija>=1) {
				nastavaUcenje = 0;
				nastava = 0;
			}
			if(koncentracija===0) {
				nastavaUcenje = 0;
				nastava = 0;
			}

			$scope.rezultatiIspita1 = nastavaUcenje + ucenjeVideo + ucenjeDL + ucenjeKnjiga;
			var rezultat1 = parseInt($scope.rezultatiIspita1);
			$scope.bodovi1 = parseInt($scope.rezultatiIspita1);

			if(rezultat1 < 51) {
				$scope.ocjena = 5;
				$scope.studentPao = true;
				$scope.studentProlaz = false;
			}
			if(rezultat1 > 50 && rezultat1 <61) {
				$scope.ocjena = 6;
				$scope.studentProlaz = true;
				$scope.studentPao = false;
			}
			if(rezultat1 > 60 && rezultat1 <71) {
				$scope.ocjena = 7;
				$scope.studentProlaz = true;
				$scope.studentPao = false;
			}
			if(rezultat1 > 70 && rezultat1 <81) {
				$scope.ocjena = 8;
				$scope.studentProlaz = true;
				$scope.studentPao = false;
			}
			if(rezultat1 > 80 && rezultat1 <91) {
				$scope.ocjena = 9;
				$scope.studentProlaz = true;
				$scope.studentPao = false;
			}
			if(rezultat1 > 90 && rezultat1 <101) {
				$scope.ocjena = 10;
				$scope.studentProlaz = true;
				$scope.studentPao = false;
			}
		};

		$scope.student2SimuliranjeIspita = function (dl, video, prisustvo, koncentracija, knjiga) {
			$scope.hideControls = true;
			$scope.showResults = true;

			var ucenjeKnjiga = $scope.ispitKnjiga  * studentKalkulacijaUcenja(knjiga);
			var ucenjeDL = $scope.ispitDL * studentKalkulacijaUcenja(dl);
			var ucenjeVideo = $scope.ispitVideo * studentKalkulacijaUcenja(video);
			var nastava = (prisustvo+koncentracija)/2;
			var nastavaUcenje = $scope.ispitNastava * studentKalkulacijaUcenja(nastava);

			if(prisustvo === 0 && koncentracija>=1) {
				nastavaUcenje = 0;
				nastava = 0;
			}
			if(koncentracija===0) {
				nastavaUcenje = 0;
				nastava = 0;
			}

			$scope.rezultatiIspita2 = nastavaUcenje + ucenjeVideo + ucenjeDL + ucenjeKnjiga;
			var rezultat2 = parseInt($scope.rezultatiIspita2);
			$scope.bodovi2 = parseInt($scope.rezultatiIspita2);

			if(rezultat2 < 51) {
				$scope.ocjena2 = 5;
				$scope.studentPao2 = true;
				$scope.studentProlaz2 = false;

			}
			if(rezultat2 > 50 && rezultat2 <61) {
				$scope.ocjena2 = 6;
				$scope.studentProlaz2 = true;
				$scope.studentPao2 = false;
			}
			if(rezultat2 > 60 && rezultat2 <71) {
				$scope.ocjena2 = 7;
				$scope.studentProlaz2 = true;
				$scope.studentPao2 = false;
			}
			if(rezultat2 > 70 && rezultat2 <81) {
				$scope.ocjena2 = 8;
				$scope.studentProlaz2 = true;
				$scope.studentPao2 = false;
			}
			if(rezultat2 > 80 && rezultat2 <91) {
				$scope.ocjena2 = 9;
				$scope.studentProlaz2 = true;
				$scope.studentPao2 = false;
			}
			if(rezultat2 > 90 && rezultat2 <101) {
				$scope.ocjena2 = 10;
				$scope.studentProlaz2 = true;
				$scope.studentPao2 = false;
			}
		};


		$scope.startujSimulaciju = function() {
			$scope.ProfTotal = $scope.professorNastava + $scope.professorKnjiga + $scope.professorDL + $scope.professorVideo;
			if (isNaN($scope.ProfTotal)) {
				alert('Unesite brojeve od 0 do 10 u sva polja');
			} else if($scope.ProfTotal>0){
				$scope.showExam = true;
				generisiIspit();
			} else if ($scope.ProfTotal===0) {
				alert('Unesite neku vrijednost vecu od 0 u atribute profesora');
			}

		};

		var generisiIspit = function() {
			var examIndex = 100 / $scope.ProfTotal;

			$scope.ispitKnjiga = examIndex * $scope.professorKnjiga;
			$scope.ispitNastava = examIndex * $scope.professorNastava;
			$scope.ispitDL = examIndex * $scope.professorDL;
			$scope.ispitVideo = examIndex * $scope.professorVideo;
		};

		var studentKalkulacijaUcenja = function (atribut) {
			if(atribut===0) {
				atribut = 0;
			}
			if(atribut===0) {
				atribut = 0;
			}
			if (atribut === 1) {
				atribut = 0.1;
			}
			if (atribut === 1.5) {
				atribut = 0.15;
			}
			if(atribut===2) {
				atribut = 0.2;
			}
			if (atribut === 2.5) {
				atribut = 0.25;
			}
			if (atribut === 3) {
				atribut = 0.3;
			}
			if(atribut===3.5) {
				atribut = 0.35;
			}
			if (atribut === 4) {
				atribut = 0.4;
			}
			if (atribut === 4.5) {
				atribut = 0.45;
			}
			if (atribut === 5) {
				atribut = 0.5;
			}
			if (atribut === 5.5) {
				atribut = 0.55;
			}
			if (atribut === 6) {
				atribut = 0.6;
			}
			if(atribut===6.5) {
				atribut = 0.65;
			}
			if (atribut === 7) {
				atribut = 0.7;
			}
			if (atribut === 7.5) {
				atribut = 0.75;
			}
			if(atribut===8) {
				atribut = 0.8;
			}
			if (atribut === 8.5) {
				atribut = 0.85;
			}
			if (atribut === 9) {
				atribut = 0.9;
			}
			if (atribut === 9.5) {
				atribut = 0.95;
			}
			if (atribut === 10) {
				atribut = 1;
			}
			
			return atribut;
		};
	};

	app.controller("MainController", MainController);

}());
