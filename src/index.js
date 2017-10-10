$(document).ready(function () {
    'use strict';

    require('./fonts/1YwB1sO8YE1Lyjf12WNiUA.woff2');
    require('./css/style.css');

    // var commonDataApp = [],
    //     listUserContent = $('.list-user__content'),
    //     $formView = $('.wrapper-form-info-view'),
    //     $formEdit = $('.wrapper-form-info-edit'),
    //     $formAdd = $('.wrapper-form-infor-add'),
    //     $templateWrapper = $('.template-wrapper'),
    //     $btnSubmitEdit = $formEdit.find('.btn-submit'),
    //     $btnSubmitAdd = $formAdd.find('.btn-submit'),
    //     dataAppStorage,

    //     // Form add new client info variable
    //     // $inpAddStatus = $formAdd.find('.status'),
    //     $inpAddName = $formAdd.find('.name'),
    //     $inpAddEnvironment = $formAdd.find('.environment'),
    //     $inpAddLicense = $formAdd.find('.license'),
    //     $inpAddFeature = $formAdd.find('.feature'),
    //     $inpAddSubscription = $formAdd.find('.subscription'),
    //     $inpAddPrefix = $formAdd.find('.textarea-prefix'),
    //     $listSourceAddNew = $formAdd.find('.list-checkbox'),

    //     // Form edit client info variable
    //     $inpEditName = $formEdit.find('.name'),
    //     // $inpEditSku = $formEdit.find('.sku'),
    //     $inpEditLicense = $formEdit.find('.license'),
    //     $inpEditSubscription = $formEdit.find('.subscription'),
    //     $inpEditFeature = $formEdit.find('.feature'),
    //     $inpEditPrefix = $formEdit.find('.textarea-prefix'),
    //     formViewAttr = $formView.attr('data-id'),
    //     dataIdAttr = $formEdit.attr('data-id'),

    //     // flag for validate form
    //     flagHasAddName = false,
    //     flagHasAddEnvironment = false,
    //     flagHasAddLicense = false,
    //     flagHasAddFeature = false,
    //     flagHasAddSubscrition = false,
    //     flagHasAddSource = false,
    //     flagHasAddPrefix = false;

    // /**
    //  * Init App
    //  */
    // var App = {
    //     init: function () {
    //         // get and build list source default
    //         this.request.getSource()
    //             .then(function (resp) {
    //                 var arrayItem,
    //                     result = [];

    //                 resp.result.map(function(item) {
    //                     arrayItem = Object.values(item);
    //                     arrayItem.map(function (value) {
    //                         result = result.concat(value);
    //                     });
    //                 });

    //                 App.renderUI.buildListSources(result);
    //             });

    //         // render client info on each row
    //         dataAppStorage = App.storage.getDataLocalStorage() || [];
    //         if (!dataAppStorage || !dataAppStorage.length) {
    //             this.request.getEntitlement()
    //                 .then(function (resp) {
    //                     resp.result = App.renderUI.formatData(resp.result);

    //                     // build list row client's info
    //                     commonDataApp = resp.result;
    //                     App.renderUI.drawList(resp.result);
    //                     dataAppStorage = commonDataApp;
    //                     App.storage.setDataLocalStorage(dataAppStorage);
    //                 });
    //         } else {
    //             commonDataApp = dataAppStorage;
    //             App.renderUI.renderFromLocalStorage(dataAppStorage);
    //         }

    //         this.bindEvents();
    //     },

    //     storage: {
    //         getDataLocalStorage: function () {
    //             return JSON.parse(localStorage.getItem('storage'));

    //         },

    //         setDataLocalStorage: function (dataAppStorage) {
    //             localStorage.setItem('storage', JSON.stringify(dataAppStorage));
    //         },
    //     },

    //     bindEvents: function() {
    //         // handle show form add new
    //         $('.button-add-new').on('click', function () {
    //             var self = this;

    //             self.renderUI.buildFormAdd();
    //         }.bind(this));

    //         // handle reset value when cancel form
    //         $('.btn-cancel').on('click', function () {
    //             var self = this;

    //             self.renderUI.resetValue();
    //         }.bind(this));

    //         // handle event when submit form infor added
    //         $btnSubmitAdd.on('click', function (e) {
    //             e.preventDefault();
    //             var self = this;

    //             self.renderUI.addNewClientInfor($inpAddName, $inpAddLicense, $inpAddFeature, $inpAddPrefix);
    //         }.bind(this));

    //         //handle submit button event
    //         $btnSubmitEdit.on('click', function(e) {
    //             e.preventDefault();
    //             var self = this;

    //             self.renderUI.editClientInfor($inpEditName, $inpEditLicense, $inpEditSubscription, $inpEditFeature, $inpEditPrefix, formViewAttr, dataIdAttr);
    //         }.bind(this));

    //         // ============= validate form add ===============
    //         $inpAddName.on('keyup', function (e) {
    //             var value = $.trim(e.currentTarget.value),
    //                 regexName = new RegExp('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$');

    //             if (value !== '' && regexName.test(value)) {
    //                 flagHasAddName = true;
    //                 $formAdd.find('.show-warning-name').addClass('hidden');
    //                 $inpAddName.removeClass('invalid');
    //             } else {
    //                 flagHasAddName = false;
    //                 $formAdd.find('.show-warning-name').removeClass('hidden');
    //                 $inpAddName.addClass('invalid');
    //             }

    //             App.renderUI.validateOtherField(flagHasAddName, flagHasAddEnvironment, flagHasAddLicense, flagHasAddFeature, flagHasAddSubscrition, flagHasAddSource, flagHasAddPrefix);
    //         });

    //         $inpAddEnvironment.on('change', function (e) {
    //             var value = $.trim(e.currentTarget.value);

    //             if (value !== '' && value !== 'Open this select environment') {
    //                 flagHasAddEnvironment = true;
    //                 $formAdd.find('.show-warning-environment').addClass('hidden');
    //                 $inpAddEnvironment.removeClass('invalid');
    //             } else {
    //                 flagHasAddEnvironment = false;
    //                 $formAdd.find('.show-warning-environment').removeClass('hidden');
    //                 $inpAddEnvironment.addClass('invalid');
    //             }

    //             App.renderUI.validateOtherField(flagHasAddName, flagHasAddEnvironment, flagHasAddLicense, flagHasAddFeature, flagHasAddSubscrition, flagHasAddSource, flagHasAddPrefix);
    //         });

    //         $inpAddLicense.on('keyup', function (e) {
    //             var value = $.trim(e.currentTarget.value),
    //                 regexLicense = new RegExp('^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$');

    //             if (value !== '' && regexLicense.test(value)) {
    //                 flagHasAddLicense = true;
    //                 $formAdd.find('.show-warning-license').addClass('hidden');
    //                 $inpAddLicense.removeClass('invalid');
    //             } else {
    //                 flagHasAddLicense = false;
    //                 $formAdd.find('.show-warning-license').removeClass('hidden');
    //                 $inpAddLicense.addClass('invalid');
    //             }

    //             App.renderUI.validateOtherField(flagHasAddName, flagHasAddEnvironment, flagHasAddLicense, flagHasAddFeature, flagHasAddSubscrition, flagHasAddSource, flagHasAddPrefix);
    //         });

    //         $inpAddSubscription.on('change', function (e) {
    //             var value = $.trim(e.currentTarget.value);

    //             if (value !== '' && value !== 'Open this select subscription') {
    //                 flagHasAddSubscrition = true;
    //                 $formAdd.find('.show-warning-subscription').addClass('hidden');
    //                 $inpAddSubscription.removeClass('invalid');
    //             } else {
    //                 flagHasAddSubscrition = false;
    //                 $formAdd.find('.show-warning-subscription').removeClass('hidden');
    //                 $inpAddSubscription.addClass('invalid');
    //             }

    //             App.renderUI.validateOtherField(flagHasAddName, flagHasAddEnvironment, flagHasAddLicense, flagHasAddFeature, flagHasAddSubscrition, flagHasAddSource, flagHasAddPrefix);
    //         });

    //         $inpAddFeature.on('keyup', function (e) {
    //             var value = $.trim(e.currentTarget.value),
    //                 regexFeature = new RegExp('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$');

    //             if (value !== '' && regexFeature.test(value)) {
    //                 flagHasAddFeature = true;
    //                 $formAdd.find('.show-warning-feature').addClass('hidden');
    //                 $inpAddFeature.removeClass('invalid');
    //             } else {
    //                 flagHasAddFeature = false;
    //                 $formAdd.find('.show-warning-feature').removeClass('hidden');
    //                 $inpAddFeature.addClass('invalid');
    //             }

    //             App.renderUI.validateOtherField(flagHasAddName, flagHasAddEnvironment, flagHasAddLicense, flagHasAddFeature, flagHasAddSubscrition, flagHasAddSource, flagHasAddPrefix);
    //         });

    //         $listSourceAddNew.on('change', function () {
    //             var isHaveChecked = $('input[name="sources"]:checked');

    //             if (isHaveChecked.length > 0) {
    //                 flagHasAddSource = true;
    //                 $formAdd.find('.custom-control-indicator').removeClass('invalid');
    //                 $formAdd.find('.custom-control-description').removeClass('invalid');
    //             } else {
    //                 flagHasAddSource = false;
    //                 $formAdd.find('.custom-control-indicator').addClass('invalid');
    //                 $formAdd.find('.custom-control-description').addClass('invalid');
    //             }

    //             App.renderUI.validateOtherField(flagHasAddName, flagHasAddEnvironment, flagHasAddLicense, flagHasAddFeature, flagHasAddSubscrition, flagHasAddSource, flagHasAddPrefix);
    //         });

    //         $inpAddPrefix.on('keyup', function (e) {
    //             var value = $.trim(e.currentTarget.value),
    //                 regexPrefix = new RegExp('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$');

    //             if (value !== '' && regexPrefix.test(value)) {
    //                 flagHasAddPrefix = true;
    //                 $formAdd.find('.show-warning-prefix').addClass('hidden');
    //                 $inpAddPrefix.removeClass('invalid');
    //                 $inpAddPrefix.attr('rows', 4);
    //             } else {
    //                 flagHasAddPrefix = false;
    //                 $formAdd.find('.show-warning-prefix').removeClass('hidden');
    //                 $inpAddPrefix.attr('rows', 3);
    //                 $inpAddPrefix.addClass('invalid');
    //             }

    //             App.renderUI.validateOtherField(flagHasAddName, flagHasAddEnvironment, flagHasAddLicense, flagHasAddFeature, flagHasAddSubscrition, flagHasAddSource, flagHasAddPrefix);
    //         });

    //     },

    //     request: {
    //         getSource: function () {
    //             var defer = $.Deferred();

    //             $.ajax({
    //                 type: 'GET',
    //                 url: 'http://localhost:3000/',
    //                 success: function (resp) {
    //                     resp = {
    //                         'result': [
    //                             {'Public': ['Estimize','Selerity','ZeroHedge','SwedenRiksbank','BBCNews','TechCrunch','BidnessETC', 'ArsTechnica','TheStreet','FederalReserve','SeekingAlpha','FierceMarkets','Genscape']},

    //                             {'Licensed': ['Selerity_SGI','GlobeNewswire','Marketwired','BusinessInsider','Findyr','FT_FT','TheFly','MTNewswires','NorgesBank','GlobeNewswireEurope','CNNMoney','DailyFX','InstitutionalInvestor','Ofcom','Wired']},

    //                             {'Custom': ['FCC','BankOfNewZealand','Recode','Quartz','NYTimes','EUCommission','Xinhua','BankOfEngland','CNBC','BankOfCanada','BankOfAustralia','EuropeanCentralBank','BenzingaPro','TWITTER','Selerity_Trumpet']}
    //                         ],
    //                         'errorMessage': null
    //                     };

    //                     defer.resolve(resp);
    //                 }
    //             }).fail(function (e) {
    //                 defer.reject(e);
    //             });

    //             return defer.promise();
    //         },

    //         createEntitlement: function (data) {
    //             var fullData,
    //                 defer = $.Deferred();

    //             $.ajax({
    //                 type: 'POST',
    //                 url: 'https://reqres.in/api/users',
    //                 success: function (resp) {
    //                     resp = {
    //                         'result': {
    //                             'apiKey': 'CHmsSBaru6EP26kIHSCVYy7V4bVEpX2xDmCMok6pIGLvy5',
    //                             'sku': 'o44NB3dieU6'
    //                         },
    //                         'errorMessage': null
    //                     };

    //                     fullData = $.extend(data, resp.result);
    //                     defer.resolve(fullData);
    //                 }
    //             }).fail(function (e) {
    //                 defer.reject(e);
    //             });

    //             return defer.promise();
    //         },

    //         getEntitlement: function () {
    //             var defer = $.Deferred();
    //             $.ajax({
    //                 type: 'GET',
    //                 url: 'http://localhost:3000/',
    //                 success: function (resp) {
    //                     resp = {
    //                         'result': [
    //                             {
    //                                 'apiKey': 'jp15pZbdhLcetat41DcFhbaQlpd0aRjrfUesNFIaPsHwYe',
    //                                 'status': 'active',
    //                                 'description': 'client',
    //                                 'createdTimestamp': '2017-01-20T00:53:01.647000000',
    //                                 'updatedTimestamp': '2017-01-20T00:53:01.647000000',
    //                                 'sku': '6iVBa5J4Y90',
    //                                 'features': [{'twitterTrial': 'true'}, {'numberOfWindows': 2}],
    //                                 'licenseCount': 564,
    //                                 'subscription': 'Premium',
    //                                 'contentPrefix': 'content prefix',
    //                                 'environment': 'PRD',
    //                                 'sources': ['BBCNews']
    //                             },
    //                             {
    //                                 'apiKey': 'j234sdaf5pZbdhLcetat41DcFhbaQlpd0aRTEfsdfsdfsawr',
    //                                 'status': 'active',
    //                                 'description': 'Dien Vo',
    //                                 'createdTimestamp': '2017-01-20T00:53:01.647000000',
    //                                 'updatedTimestamp': '2017-01-20T00:53:01.647000000',
    //                                 'sku': 'FR23dsf1a5J4Y90',
    //                                 'features': [{'twitterTrial': 'true'}],
    //                                 'licenseCount': 6978,
    //                                 'subscription': 'Premium',
    //                                 'contentPrefix': 'content prefix',
    //                                 'environment': 'PRD',
    //                                 'sources': ['BBCNews', 'Estimize', 'Selerity']
    //                             },
    //                         ],
    //                         'errorMessage': null
    //                     };

    //                     defer.resolve(resp);
    //                 }
    //             }).fail(function (e) {
    //                 defer.reject(e);
    //             });

    //             return defer.promise();
    //         },

    //         updateEntitlement: function (data) {
    //             var defer = $.Deferred();

    //             $.ajax({
    //                 type: 'POST',
    //                 data: data,
    //                 url: 'https://reqres.in/api/users',
    //                 success: function(resp) {
    //                     resp = {
    //                         'result': null,
    //                         'errorMessage': null
    //                     };

    //                     resp = data;
    //                     defer.resolve(resp);
    //                 }
    //             }).fail(function (e) {
    //                 defer.reject(e);
    //             });

    //             return defer.promise();
    //         }
    //     },

    //     renderUI: {
    //         validateOtherField: function (flagHasAddName, flagHasAddEnvironment, flagHasAddLicense, flagHasAddFeature, flagHasAddSubscrition, flagHasAddSource, flagHasAddPrefix) {
    //             console.log('DV testing', flagHasAddName, flagHasAddEnvironment, flagHasAddLicense, flagHasAddFeature, flagHasAddSubscrition, flagHasAddSource, flagHasAddPrefix);

    //             if (flagHasAddName && flagHasAddEnvironment && flagHasAddLicense && flagHasAddFeature && flagHasAddSubscrition && flagHasAddSource && flagHasAddPrefix) {
    //                 $btnSubmitAdd.removeAttr('disabled');
    //             } else {
    //                 $btnSubmitAdd.attr('disabled', true);
    //             }
    //         },
    //         /**
    //          * render data from local storage
    //          *
    //          * @param {array} data - array object client's infor
    //          */
    //         renderFromLocalStorage: function(data) {
    //             App.renderUI.drawList(data);
    //         },

    //         /**
    //          * drawList function
    //          *
    //          * @param {Array} - result: list of object data return from server
    //          */
    //         drawList: function (result) {
    //             var templateContent = [];
    //             $.each(result, function (index, value) {
    //                 result = App.renderUI.buildRowUser(value);
    //                 templateContent.push(result);
    //             });
    //             listUserContent.append(templateContent);
    //         },

    //         /**
    //          * Build row user's data
    //          *
    //          * @param {Object} - item
    //          */
    //         buildRowUser: function (item) {
    //             var $userRowTemplate = $templateWrapper.find('.list-user__body').clone(),
    //                 $apiKey = $userRowTemplate.find('.api-key span'),
    //                 $name = $userRowTemplate.find('.user-name span'),
    //                 $environment = $userRowTemplate.find('.environment span'),
    //                 $status = $userRowTemplate.find('.status span'),
    //                 $dateCreated = $userRowTemplate.find('.date-created span'),
    //                 $buttonEdit = $userRowTemplate.find('.btn-sm-edit'),
    //                 curentData;

    //             $userRowTemplate.attr('data-id', item.apiKey);
    //             $apiKey.html(item.apiKey);
    //             $name.html(item.description);
    //             $environment.html(item.environment);
    //             $status.html(item.status);
    //             $dateCreated.html(item.createdTimestamp);
    //             // $userRowTemplate.attr('data-sources', item.sources);

    //             // Handle event of each row
    //             $userRowTemplate.on('click', function (e) {
    //                 var $currentTarget = $(e.currentTarget),
    //                     $wrapper = $('.list-user__body'),
    //                     hasClass = $wrapper.hasClass('active');
    //                 // set actice for each row clicked
    //                 if (hasClass) {
    //                     $wrapper.removeClass('active');
    //                     $currentTarget.addClass('active');
    //                 } else{
    //                     $currentTarget.addClass('active');
    //                 }

    //                 $formView.removeClass('hidden');
    //                 curentData = App.renderUI.dataMapApiKey(item.apiKey, commonDataApp);
    //                 App.renderUI.buildFormView(curentData);
    //                 App.renderUI.buildListSourcesSelected(curentData.sources);
    //             });

    //             // handle show popup - edit form
    //             $buttonEdit.on('click', function (e) {
    //                 e.stopPropagation();

    //                 // re-show modal bootstrap after stopPropagation
    //                 $('#modal-edit-infor').modal('show');

    //                 curentData = App.renderUI.dataMapApiKey(item.apiKey, commonDataApp);
    //                 App.renderUI.buildFormEdit(curentData);
    //                 App.renderUI.buildListSourcesSelected(curentData.sources, 'edit');
    //             });

    //             return $userRowTemplate;
    //         },

    //         /**
    //          * fucntion help map api key with list data request
    //          *
    //          * @param {string} apikey - api key of row
    //          * @param {array} data - list data store object
    //          */
    //         dataMapApiKey: function (apikey, data) {
    //             var curentData;

    //             data.map(function (item) {
    //                 if (item.apiKey === apikey) {
    //                     curentData = item;
    //                     return false;
    //                 }
    //             });

    //             return curentData;
    //         },

    //         /**
    //          * build form information view data
    //          *
    //          * @param {Object} - item: object data
    //          */
    //         buildFormView: function (item) {
    //             $formView.find('.name').text(item.description);
    //             $formView.find('.api-key').text(item.apiKey);
    //             $formView.find('.sku').text(item.sku);
    //             $formView.find('.environment').text(item.environment);
    //             $formView.find('.date-created').text(item.createdTimestamp);
    //             $formView.find('.license').text(item.licenseCount);
    //             $formView.find('.subscription').text(item.subscription);
    //             $formView.find('.feature').text(item.features);
    //             $formView.find('.prefix-content').text(item.contentPrefix);

    //             $formView.attr('data-id', item.apiKey);
    //         },

    //         /**
    //          * build form edit client's information
    //          *
    //          * @param {Object} item - object data
    //          */
    //         buildFormEdit: function (item) {
    //             $formEdit.find('.name').val(item.description);
    //             $formEdit.find('.api-key').text(item.apiKey);
    //             $formEdit.find('.sku').text(item.sku);
    //             $formEdit.find('.license').val(item.licenseCount);
    //             $formEdit.find('.date-created').text(item.createdTimestamp);
    //             $formEdit.find('.subscription').val(item.subscription);
    //             $formEdit.find('.feature').val(item.features);
    //             App.renderUI.buildListSourcesSelected(item.sources, 'edit');
    //             $formEdit.find('.textarea-prefix').val(item.contentPrefix);
    //             $formEdit.attr('data-id', item.apiKey);

    //             // trigger change selected for environment field
    //             $('.environment option').map(function () {
    //                 if ($(this).text() === item.environment) {
    //                     $('.environment option').filter(function() {
    //                         return $(this).text() == item.environment;
    //                     }).prop('selected',true);
    //                 }
    //             });
    //         },

    //         /**
    //          * function re-build row user when edit
    //          *
    //          * @param {object} itemData - data object need to re-build
    //          * @param {string} apiKey - api key of row
    //          */
    //         reBuildRowUser: function (itemData, apiKey) {
    //             var rowEdit,
    //                 wrapper = $('.list-user__body'),
    //                 apikey = wrapper.find('.api-key');

    //             apikey.map(function (index, item) {
    //                 if ($(item).text() === apiKey) {
    //                     $(item).parent().find('.user-name').text(itemData.name);
    //                     $(item).parent().find('.environment').text(itemData.environment);
    //                     $(item).parent().find('.date-created').text(itemData.dateCreated);
    //                 }
    //             });
    //         },

    //         /**
    //          * function help build form add new client's info
    //          */
    //         buildFormAdd: function () {
    //             var $dateCreated = $formAdd.find('.date-created');

    //             $dateCreated.text(App.renderUI.generateDate());
    //         },

    //         /**
    //          * function build list source default
    //          *
    //          * @param {array} sourcesList - source list array default
    //          */
    //         buildListSources: function (sourcesList) {
    //             var listSourceContent = [];

    //             // build list source to UI
    //             $.each(sourcesList, function (index, value) {
    //                 var $sourceTemplate = $templateWrapper.find('.custom-checkbox').clone();

    //                 $sourceTemplate.find('.custom-control-description').html(value);
    //                 $sourceTemplate.find('.custom-control-input').prop('value', value);
    //                 listSourceContent.push($sourceTemplate);
    //             });

    //             $('.list-checkbox').html(listSourceContent);
    //         },

    //         /**
    //          * function build list source after selected
    //          *
    //          * @param {sourceSelected} sourceSelected - list source after selected
    //          * @param {mode} mode - determine mode 'edit', 'addNew' or normal
    //          */
    //         buildListSourcesSelected: function (sourceSelected, mode) {
    //             var $wrapper,
    //                 $sourceNames,
    //                 isEdit = false,
    //                 isAddNew = false;

    //             if (mode === 'edit') {
    //                 isEdit = true;
    //                 $wrapper = $formEdit;
    //             } else if (mode === 'addNew') {
    //                 isAddNew = true;
    //                 $wrapper = $formAdd;
    //             } else {
    //                 $wrapper = $formView;
    //                 $formView.find('.list-checkbox .custom-control-input').prop('disabled', true);
    //             }

    //             if (!sourceSelected || !sourceSelected.length) return;
    //             $sourceNames = $wrapper.find('.list-checkbox .custom-control-description');

    //             $.each($sourceNames, function (index, item) {
    //                 // reset prop check after handle
    //                 $(item).parent().find('.custom-control-input').prop('checked', false);

    //                 if (sourceSelected.indexOf($(item).html()) !== -1) {
    //                     $(item).parent().find('.custom-control-input').prop('checked', true);
    //                 }
    //             });
    //         },

    //         /**
    //          * format data return from server
    //          *
    //          * @param {array} resp - data return from API server need to format
    //          */
    //         formatData: function (resp) {
    //             var date,
    //                 features,
    //                 result = '',
    //                 length,
    //                 data = JSON.parse(JSON.stringify(resp));

    //             data.map(function(respItem) {
    //                 // TODO: 1.format date create
    //                 date = new Date(respItem.createdTimestamp);
    //                 respItem.createdTimestamp = ((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());

    //                 // TODO: 2.format features
    //                 features = respItem.features;

    //                 result = '';
    //                 features.forEach(function (item, index) {
    //                     length = features.length - 1;
    //                     for (var key in item) {

    //                         if (index !== length) {
    //                             result += key + ':' + item[key] + ',';
    //                         } else {
    //                             result += key + ':' + item[key];
    //                         }
    //                     }
    //                     respItem.features = result;
    //                 });

    //                 // TODO: 3.format list sources
    //             });

    //             return data;
    //         },

    //         generateDate: function () {
    //             var date = new Date(),
    //                 year = date.getFullYear(),
    //                 month = date.getMonth() + 1,
    //                 day = date.getDate(),
    //                 result;

    //             if (day < 10) {
    //                 day = '0' + day;
    //             }

    //             if (month < 10) {
    //                 month = '0' + month;
    //             }

    //             result = month + '/' + day + '/' + year;

    //             return result;
    //         },

    //         /**
    //          * main function add new client's info
    //          */
    //         addNewClientInfor: function ($inpAddName, $inpAddLicense, $inpAddFeature, $inpAddPrefix) {
    //             var templateContentAddNew = [],
    //                 objectDataAddNew = {},
    //                 result,
    //                 envOptionSelect = $('.environment .value-option:selected').text(),
    //                 subscriptionOptionSelect = $('.subscription .value-option:selected').text();

    //             objectDataAddNew = {
    //                 // apiKey: App.renderUI.generateApiKey(),
    //                 // sku: $inpAddSku.val(),
    //                 description: $inpAddName.val(),
    //                 environment: envOptionSelect,
    //                 status: 'TST',
    //                 createdTimestamp: App.renderUI.generateDate(),
    //                 licenseCount: $inpAddLicense.val(),
    //                 subscription: subscriptionOptionSelect,
    //                 features: $inpAddFeature.val(),
    //                 contentPrefix: $inpAddPrefix.val(),
    //                 sources: App.renderUI.getCurrentSource($formAdd),
    //             };

    //             App.request.createEntitlement(objectDataAddNew)
    //                 .then(function (resp) {
    //                     // Render new data on row of table
    //                     commonDataApp.push(resp);
    //                     result = App.renderUI.buildRowUser(resp);
    //                     templateContentAddNew.push(result);
    //                     listUserContent.append(templateContentAddNew);

    //                     // save current data into local storage
    //                     commonDataApp = dataAppStorage;
    //                     App.storage.setDataLocalStorage(dataAppStorage);
    //                 });


    //             // hide modal bootstrap after add new infor
    //             $('#modal-add-infor').modal('hide');

    //             // // reset value
    //             App.renderUI.resetValue();
    //         },

    //         /**
    //          * main funtion edit client's info
    //          */
    //         editClientInfor: function ($inpEditName, $inpEditLicense, $inpEditSubscription, $inpEditFeature, $inpEditPrefix, formViewAttr, dataIdAttr) {
    //             var valOptionSelect,
    //                 $rowTrigger;

    //             valOptionSelect = $formEdit.find('.environment option:selected').text();

    //             $rowTrigger = $('.list-user__body[data-id = "' + dataIdAttr + '"');

    //             commonDataApp.map(function(obj, index) {
    //                 if (dataIdAttr === obj.apiKey) {
    //                     commonDataApp[index] = {
    //                         description: $inpEditName.val(),
    //                         apiKey: obj.apiKey,
    //                         sku: obj.sku,
    //                         environment: valOptionSelect,
    //                         status: obj.status,
    //                         createdTimestamp: obj.createdTimestamp,
    //                         licenseCount: $inpEditLicense.val(),
    //                         subscription: $inpEditSubscription.val(),
    //                         features: $inpEditFeature.val(),
    //                         contentPrefix: $inpEditPrefix.val(),
    //                         sources: App.renderUI.getCurrentSource($formEdit),
    //                     };

    //                     App.request.updateEntitlement(commonDataApp[index])
    //                         .then(function (resp) {
    //                             App.renderUI.reBuildRowUser(resp, dataIdAttr);
    //                             // check if client are editing === client are viewing then trigger click on row
    //                             if (formViewAttr === dataIdAttr) {
    //                                 $rowTrigger.trigger('click');
    //                             }

    //                             App.renderUI.buildFormEdit(resp);
    //                         });

    //                 }
    //             });

    //             dataAppStorage = commonDataApp;
    //             App.storage.setDataLocalStorage(dataAppStorage);

    //             // hide modal edit
    //             $('#modal-edit-infor').modal('hide');

    //             // reset values
    //             App.renderUI.resetValue();

    //         },

    //         getCurrentSource: function ($formMode) {
    //             var listDefaultSource = [];

    //             // reset list source content
    //             listDefaultSource = [];
    //             $formMode.find('.custom-control-input:checked').map(function (index, values) {
    //                 listDefaultSource.push($(values).val());
    //             });

    //             return listDefaultSource;
    //         },

    //         resetValue: function () {
    //             $('input:not(.custom-control-input)').val('');
    //             $('textarea').val('');
    //             $('.environment').val($('.environment option:first').val());
    //             // reset form validate
    //             $formAdd.find('.form-control').removeClass('invalid');
    //             $formAdd.find('.form-text').addClass('hidden');
    //             $formAdd.find('.custom-control-indicator').removeClass('invalid');
    //             $formAdd.find('.custom-control-description').removeClass('invalid');
    //             $formAdd.find('.custom-select').removeClass('invalid');
    //         }
    //     },
    // };

    // App.init();
});
