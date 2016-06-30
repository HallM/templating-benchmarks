var Lisplate = require('lisplate');
var fs = require('fs');
var path = require('path');
var Bluebird = require('bluebird');

var readFile = Bluebird.promisify(fs.readFile);

var engine = new Lisplate({
    sourceLoader: function(name, callback) {
        var filepath = path.resolve(__dirname, '..', 'templates', 'ui-components', name + '.ltml');
        return readFile(filepath, 'UTF-8');
    },

    viewModelLoader: function(templatePath) {
        var filepath = path.resolve(__dirname, '..', 'templates', 'ui-components', templatePath + '.js');
        var viewmodel = null;
        try {
            viewmodel = require(filepath);
        } catch(e) {
        }
        return Bluebird.resolve(viewmodel);
    }
});

engine.addHelper('reverse', require('../helpers/util').reverse);

module.exports = {
    name: 'lisplate',
    ext: 'ltml',
    render: function(template, data, callback) {
        engine.render(template, data, callback);
    },
    load: function(src, templatePath, templateName, callback) {
        engine.compileFn(templatePath, src, callback);
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = 'var template = ' + engine.compile(src);
        callback(null, compiled);
    }
};
