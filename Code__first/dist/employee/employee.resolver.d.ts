import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Project } from 'src/project/entities/project.entity';
export declare class EmployeeResolver {
    private employeeService;
    constructor(employeeService: EmployeeService);
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    createEmployee(createEmployeeInput: CreateEmployeeInput): Promise<Employee>;
    project(employee: Employee): Promise<Project>;
}
