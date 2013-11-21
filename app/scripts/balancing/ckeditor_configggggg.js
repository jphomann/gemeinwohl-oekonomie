/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here.
    // For the complete reference:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    config.language = 'de';
    config.uiColor = '#F8F8F8';

    // The toolbar groups arrangement, optimized for two toolbar rows.
    config.toolbar = [
        {
            name: 'styles',
            items: [ 'Format', 'Font', 'FontSize' ]
        },
        {
            name: 'clipboard',
            groups: [ 'clipboard', 'undo' ],
            items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ]
        },
        {
            name: 'tools',
            items: [ 'Maximize', 'ShowBlocks' ]
        },
        '/',
        {
            name: 'basicstyles',
            groups: [ 'basicstyles', 'cleanup' ],
            items: [ 'Bold', 'Italic', 'Underline']
        },
        {
            name: 'colors',
            items: [ 'TextColor', 'BGColor' ]
        },
        {
            name: 'paragraph',
            groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ],
            items: [ 'BulletedList', 'NumberedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
        },
        {
            name: 'links',
            items: [ 'Link', 'Unlink']
        },
        {
            name: 'insert',
            items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar']
        }
    ];

    // Toolbar groups configuration.
    config.toolbarGroups = [
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
        { name: 'forms' },
        '/',
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
        { name: 'links' },
        { name: 'insert' },
        '/',
        { name: 'styles' },
        { name: 'colors' },
        { name: 'tools' },
        { name: 'others' },
        { name: 'about' }
    ];


    // Remove some buttons, provided by the standard plugins, which we don't
    // need to have in the Standard(s) toolbar.
    // config.removeButtons = 'Subscript,Superscript';

    // Se the most common block elements.
    config.format_tags = 'p;h1;h2;h3;pre';

    // Make dialogs simpler.
    config.removeDialogTabs = 'image:advanced;link:advanced';
};
