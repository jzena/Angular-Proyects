export class Empleado {
    constructor(
        public ID: number,
        public Name: string,
        public Email: string,
        public Country: string,
        public ProjectID: number,
        public ManagerName: string,
        public ProfileImage: string
    ) { }
}