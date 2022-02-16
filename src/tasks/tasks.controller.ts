import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @ApiOkResponse({type: Task, isArray: true})
    @ApiQuery({name: 'name', required: false})
    @Get()
    getTasks(@Query('name') name: string):any {
        return this.tasksService.findAll(name);
    }

    @ApiOkResponse({type: Task, isArray: false, description: 'Returns a task by id'})
    @ApiNotFoundResponse()
    @Get(':id')
    getTaskById(@Param('id', ParseIntPipe) id: number): any {
        const user = this.tasksService.findById(id);
        if (!user) {
            throw new NotFoundException();
        }
        return user;
    }

    @ApiCreatedResponse({type: Task})
    @ApiBadRequestResponse()
    @Post()
    createTask(@Body() body: CreateTaskDto): any {
        return this.tasksService.createTask(body);
    } 
}
