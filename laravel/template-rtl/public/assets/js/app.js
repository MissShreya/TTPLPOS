(function($){"use strict";if($(window).width()>767){if($('.theiaStickySidebar').length>0){$('.theiaStickySidebar').theiaStickySidebar({additionalMarginTop:125});}}
$(document).ready(function($){var $wrapper=$('.main-wrapper');var $pageWrapper=$('.page-wrapper');var $slimScrolls=$('.slimscroll');var $sidebarOverlay=$('.sidebar-overlay');var Sidemenu=function(){this.$menuItem=$('#sidebar-menu a');};function init(){var $this=Sidemenu;$('#sidebar-menu a').on('click',function(e){if($(this).parent().hasClass('submenu')){e.preventDefault();}
if(!$(this).hasClass('subdrop')){$('ul',$(this).parents('ul:first')).slideUp(350);$('a',$(this).parents('ul:first')).removeClass('subdrop');$(this).next('ul').slideDown(350);$(this).addClass('subdrop');}else if($(this).hasClass('subdrop')){$(this).removeClass('subdrop');$(this).next('ul').slideUp(350);}});$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');}
init();function sidebar_overlay($target){if($target.length){$target.toggleClass('opened');$sidebarOverlay.toggleClass('opened');$('html').toggleClass('menu-opened');$sidebarOverlay.attr('data-reff','#'+$target[0].id);}}
$(document).on('click','#mobile_btn',function(){var $target=$($(this).attr('href'));sidebar_overlay($target);$wrapper.toggleClass('slide-nav');$('#chat_sidebar').removeClass('opened');return false;});$(document).on('click','#task_chat',function(){var $target=$($(this).attr('href'));console.log($target);sidebar_overlay($target);return false;});$sidebarOverlay.on('click',function(){var $target=$($(this).attr('data-reff'));if($target.length){$target.removeClass('opened');$('html').removeClass('menu-opened');$(this).removeClass('opened');$wrapper.removeClass('slide-nav');}
return false;});if($('.select').length>0){$('.select').select2({minimumResultsForSearch:-1,width:'100%'});}
if($('.floating').length>0){$('.floating').on('focus blur',function(e){$(this).parents('.form-focus').toggleClass('focused',(e.type==='focus'||this.value.length>0));}).trigger('blur');}
if($('#msg_list').length>0){$('#msg_list').slimscroll({height:'100%',color:'#878787',disableFadeOut:true,borderRadius:0,size:'4px',alwaysVisible:false,touchScrollStep:100});var msgHeight=$(window).height()-124;$('#msg_list').height(msgHeight);$('.msg-sidebar .slimScrollDiv').height(msgHeight);$(window).resize(function(){var msgrHeight=$(window).height()-124;$('#msg_list').height(msgrHeight);$('.msg-sidebar .slimScrollDiv').height(msgrHeight);});}
if($slimScrolls.length>0){$slimScrolls.slimScroll({height:'auto',width:'100%',position:'right',size:'7px',color:'#ccc',wheelStep:10,touchScrollStep:100});var wHeight=$(window).height()-60;$slimScrolls.height(wHeight);$('.sidebar .slimScrollDiv').height(wHeight);$(window).resize(function(){var rHeight=$(window).height()-60;$slimScrolls.height(rHeight);$('.sidebar .slimScrollDiv').height(rHeight);});}
var pHeight=$(window).height();$pageWrapper.css('min-height',pHeight);$(window).resize(function(){var prHeight=$(window).height();$pageWrapper.css('min-height',prHeight);});if($('.datetimepicker').length>0){$('.datetimepicker').datetimepicker({format:'DD-MM-YYYY',icons:{up:"fas fa-angle-up",down:"fas fa-angle-down",next:'fas fa-angle-right',previous:'fas fa-angle-left'}});$('.datetimepicker').on('dp.show',function(){$(this).closest('.table-responsive').removeClass('table-responsive').addClass('temp');}).on('dp.hide',function(){$(this).closest('.temp').addClass('table-responsive').removeClass('temp')});}
if($('.datatable').length>0){$('.datatable').DataTable({"bFilter":false,});}
$(document).on("click",".logo-hide-btn",function(){$(this).parent().hide();});if($('[data-bs-toggle="tooltip"]').length>0){$('[data-bs-toggle="tooltip"]').tooltip();}
$(document).on('click','#open_msg_box',function(){$wrapper.toggleClass('open-msg-box');return false;});if($('#lightgallery').length>0){$('#lightgallery').lightGallery({thumbnail:true,selector:'a'});}
if($('#incoming_call').length>0){$('#incoming_call').modal('show');}
if($('.summernote').length>0){$('.summernote').summernote({height:200,minHeight:null,maxHeight:null,focus:false});}
$(document).on('click','#check_all',function(){$('.checkmail').click();return false;});if($('.checkmail').length>0){$('.checkmail').each(function(){$(this).on('click',function(){if($(this).closest('tr').hasClass('checked')){$(this).closest('tr').removeClass('checked');}else{$(this).closest('tr').addClass('checked');}});});}
$(document).on('click','.mail-important',function(){$(this).find('i.fa').toggleClass('fa-star').toggleClass('fa-star-o');});if($('#drop-zone').length>0){var dropZone=document.getElementById('drop-zone');var uploadForm=document.getElementById('js-upload-form');var startUpload=function(files){console.log(files);};uploadForm.addEventListener('submit',function(e){var uploadFiles=document.getElementById('js-upload-files').files;e.preventDefault();startUpload(uploadFiles);});dropZone.ondrop=function(e){e.preventDefault();this.className='upload-drop-zone';startUpload(e.dataTransfer.files);};dropZone.ondragover=function(){this.className='upload-drop-zone drop';return false;};dropZone.ondragleave=function(){this.className='upload-drop-zone';return false;};}
if(screen.width>=992){$(document).on('click','#toggle_btn',function(){if($('body').hasClass('mini-sidebar')){$('body').removeClass('mini-sidebar');$('.subdrop + ul').slideDown();}else{$('body').addClass('mini-sidebar');$('.subdrop + ul').slideUp();}
return false;});$(document).on('mouseover',function(e){e.stopPropagation();if($('body').hasClass('mini-sidebar')&&$('#toggle_btn').is(':visible')){var targ=$(e.target).closest('.sidebar').length;if(targ){$('body').addClass('expand-menu');$('.subdrop + ul').slideDown();}else{$('body').removeClass('expand-menu');$('.subdrop + ul').slideUp();}
return false;}});}
if($('#editor').length>0){ClassicEditor.create(document.querySelector('#editor'),{toolbar:['bold','italic','link']}).then(editor=>{window.editor=editor;}).catch(err=>{console.error(err.stack);});}
if($('.toggle-password').length>0){$(document).on('click','.toggle-password',function(){$(this).toggleClass("fa-eye fa-eye-slash");var input=$(".pass-input");if(input.attr("type")=="password"){input.attr("type","text");}else{input.attr("type","password");}});}
$(".settings-form").on('click','.trash',function(){$(this).closest('.links-cont').remove();return false;});$(document).on("click",".add-links",function(){var experiencecontent='<div class="row form-row links-cont">'+
'<div class="form-group d-flex">'+
'<button class="btn social-icon"><i class="feather-github"></i></button>'+
'<input type="text" class="form-control" placeholder="Social Link">'+
'<div><a href="#" class="btn trash"><i class="feather-trash-2"></i></a></div>'+
'</div>'+
'</div>';$(".settings-form").append(experiencecontent);return false;});$('.app-listing .selectBox').on("click",function(){$(this).parent().find('#checkBoxes').fadeToggle();$(this).parent().parent().siblings().find('#checkBoxes').fadeOut();});$('.invoices-main-form .selectBox').on("click",function(){$(this).parent().find('#checkBoxes-one').fadeToggle();$(this).parent().parent().siblings().find('#checkBoxes-one').fadeOut();});if($('.SortBy').length>0){var show=true;var checkbox1=document.getElementById("checkBox");$('.selectBoxes').on("click",function(){if(show){checkbox1.style.display="block";show=false;}else{checkbox1.style.display="none";show=true;}});}
$(function(){$("input[name='invoice']").click(function(){if($("#chkYes").is(":checked")){$("#show-invoices").show();}else{$("#show-invoices").hide();}});});$(".links-info-one").on('click','.service-trash',function(){$(this).closest('.links-cont').remove();return false;});$(document).on("click",".add-links",function(){var experiencecontent='<div class="links-cont">'+
'<div class="service-amount">'+
'<a href="#" class="service-trash"><i class="fas fa-minus-circle me-1"></i>Service Charge</a> <span>$ 4</span'+
'</div>'+
'</div>';$(".links-info-one").append(experiencecontent);return false;});$(".links-info-discount").on('click','.service-trash-one',function(){$(this).closest('.links-cont-discount').remove();return false;});$(document).on("click",".add-links-one",function(){var experiencecontent='<div class="links-cont-discount">'+
'<div class="service-amount">'+
'<a href="#" class="service-trash-one"><i class="fas fa-minus-circle me-1"></i>Offer new</a> <span>$ 4 %</span'+
'</div>'+
'</div>';$(".links-info-discount").append(experiencecontent);return false;});$(".add-table-items").on('click','.remove-btn',function(){$(this).closest('.add-row').remove();return false;});$(document).on("click",".add-btn",function(){var experiencecontent='<tr class="add-row">'+
'<td>'+
'<input type="text" class="form-control">'+
'</td>'+
'<td>'+
'<input type="text" class="form-control">'+
'</td>'+
'<td>'+
'<input type="text" class="form-control">'+
'</td>'+
'<td>'+
'<input type="text" class="form-control">'+
'</td>'+
'<td>'+
'<input type="text" class="form-control">'+
'</td>'+
'<td>'+
'<input type="text" class="form-control">'+
'</td>'+
'<td class="add-remove text-end">'+
'<a href="javascript:void(0);" class="add-btn me-2"><i class="fas fa-plus-circle"></i></a> '+
'<a href="#" class="copy-btn me-2"><i class="fas fa-copy"></i></a>'+
'<a href="javascript:void(0);" class="remove-btn"><i class="feather-trash-2"></i></a>'+
'</td>'+
'</tr>';$(".add-table-items").append(experiencecontent);return false;});$(function(){$('#datetimepicker3').datetimepicker({format:'LT'});$('#datetimepicker4').datetimepicker({format:'LT'});});});})(jQuery);