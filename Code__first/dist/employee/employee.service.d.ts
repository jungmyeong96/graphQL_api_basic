import { Project } from 'src/project/entities/project.entity';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';
export declare class EmployeeService {
    private employeeRepository;
    private projectService;
    constructor(employeeRepository: Repository<Employee>, projectService: ProjectService);
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    create(employee: CreateEmployeeInput): Promise<Employee>;
    getProject(id: string): Promise<Project>;
}
