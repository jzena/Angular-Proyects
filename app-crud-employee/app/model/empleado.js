"use strict";
var Empleado = (function () {
    function Empleado(ID, Name, Email, Country, ProjectID, ManagerName, ProfileImage) {
        this.ID = ID;
        this.Name = Name;
        this.Email = Email;
        this.Country = Country;
        this.ProjectID = ProjectID;
        this.ManagerName = ManagerName;
        this.ProfileImage = ProfileImage;
    }
    return Empleado;
}());
exports.Empleado = Empleado;
//# sourceMappingURL=empleado.js.map