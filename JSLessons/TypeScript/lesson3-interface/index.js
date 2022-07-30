// let a:number = 5;
// console.log(a);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// add, get, update, delete
// interface IDatabase {
//   add();
//   get();
//   update();
//   delete();
// }
// class MySql implements IDatabase {
//   add() {
//     console.log("MySql Add");
//   }
//   get() {
//     console.log("MySql get");
//   }
//   update() {
//     console.log("MySql update");
//   }
//   delete() {
//     console.log("MySql delete");
//   }
// }
// class MongoDB implements IDatabase {
//     add() {
//       console.log("MongoDB Add");
//     }
//     get() {
//       console.log("MongoDB get");
//     }
//     update() {
//       console.log("MongoDB update");
//     }
//     delete() {
//       console.log("MongoDB delete");
//     }
//   }
// function AddDatabase(database:IDatabase){
//         database.add();
// }
// function DeleteDatabase(database:IDatabase){
//     database.delete();
// }
// AddDatabase(new MySql());
// AddDatabase(new MongoDB());
// DeleteDatabase(new MySql());
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.add = function () {
        console.log('add database');
    };
    Database.prototype.get = function () {
        console.log('get database');
    };
    return Database;
}());
var MySql = /** @class */ (function (_super) {
    __extends(MySql, _super);
    function MySql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySql.prototype.add = function () {
        console.log('add mysql');
    };
    MySql.prototype.update = function () {
        console.log("update mysql");
    };
    MySql.prototype["delete"] = function () {
        console.log('delete mysql');
    };
    return MySql;
}(Database));
function addDatabase(database) {
    database.add();
}
addDatabase(new MySql());
