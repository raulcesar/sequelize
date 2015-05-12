'use strict';
var Association = function() {

};
Association.prototype.generateAssociationAccessor = function() {
    if (this.as) {
        this.associationAccessor = this.as.plural || this.as;
    }

    if (!this.associationAccessor) {
        if (typeof this.through.model === 'string') {
            this.associationAccessor = this.through.model;
        } else if (Object(this.through.model) === this.through.model) {
            this.associationAccessor = this.through.model.tableName;
        } else {
            this.associationAccessor = this.combinedTableName;
        }
    }

    return this.associationAccessor;

};
module.exports = Association;
