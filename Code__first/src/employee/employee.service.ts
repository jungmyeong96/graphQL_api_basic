import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>,
  private projectService: ProjectService) {

}

async findAll(): Promise<Employee[]> {
  return this.employeeRepository.find();
}
async findOne(id: string) {
  return this.employeeRepository.findOne({ where: { id }})
}

async create(employee: CreateEmployeeInput): Promise<Employee> {

  let emp = this.employeeRepository.create(employee);
  return this.employeeRepository.save(emp)

}

async getProject(id: string): Promise<Project> {
  return this.projectService.findOne(id)
}
}
