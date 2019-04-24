/**
* ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
*                   Criado por Gabriel Azuaga Barbosa
*                  E-mail: gabrielbarbosaweb7@gmail.com
*  `•.¸¸.•´´¯`••._.• [ http://gabrieldaluz7.co.nf/ ] •._.••`¯´´•.¸¸.•`
* ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
*/

$(function() { 

	
	/* Se existir owlcarrousel2 ativar ! */
	if($("#superSlide").length) { 
		$('#superSlide').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			items: 1,
			autoplay:true,
			autoplayTimeout:6500
		});
	}
	
	/* Se existir owlcarrousel2 ativar !
	if($("#owl-projetos-destaque").length) { 
		$('#owl-projetos-destaque').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			items: 1,
			autoplay:true,
			autoplayTimeout:3500,
			autoplayHoverPause:true
		});
	} */
	
	/* se existir: ativar o datepicker 
	if($("#datepicker").length) { 
		$.datepicker.regional['pt-BR'] = {
			closeText: 'Fechar',
			prevText: '&#x3c;Anterior',
			nextText: 'Pr&oacute;ximo&#x3e;',
			currentText: 'Hoje',
			monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
			'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
			monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
			'Jul','Ago','Set','Out','Nov','Dez'],
			dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
			dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
			dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
			weekHeader: 'Sm',
			dateFormat: 'dd/mm/yy',
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		};
		$.datepicker.setDefaults($.datepicker.regional['pt-BR']);
		$("#datepicker").datepicker({ 
			beforeShowDay: function( date ) {
				var datePtBr = date.toLocaleDateString('pt-BR');
				var highlight = selectedDates[datePtBr];
				if (highlight) {
					return [true, "highlighted", 'Ver Eventos'];
				}
				else {
					return [true, '', ''];
				}
			},
			onSelect: function(date) {
				if(selectedDates[date] != undefined) { document.location.href = selectedDates[date]; }
			}
		});
		
	}
*/


	/* 
		-----------[ EVENTO NO MOBILE ]-------------- 
		Created by Gabriel A. Barbosa
	*/
	function noMobile() {
		window.onresize = function() { 
			noMobile();
		}
		/* Recebe altura do window */
		var wWidth = $(document).width();
		/* Nao deixa ver resolucao menor... esconder site */
		if(wWidth < 1200) { 
			$("html, body").html("Este website ainda não está disponivel para resoluções menores que 1200px! Acesse de um computador com uma resolução maior!");	
			console.log('NOMOBILE ACTIVED! [Width:'+wWidth+']');
		}

	}
 	noMobile(true);

});

console.log("**************************************************************************************************************************");
console.log("%cUma pessoa feliz não precisa de religião, não precisa de nenhum templo. Para ela, todo o universo é um templo. %c- %cOsho ", "color:green;", "color:black;", "color:red;");
console.log("Created By %cGabriel A. Barbosa %c<http://gabrieldaluz7.co.nf>", "color:blue;","color:black;");
console.log("**************************************************************************************************************************");