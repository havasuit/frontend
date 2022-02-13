import { Parser } from '~/api';
import RequestService from './request';
import { DatabaseHost } from '~/api/models';

interface CreateDatabaseHostRequest {
    name: string;
    host: string;
    port: number;
    username: string;
    password: string;
    enable_phpmyadmin: boolean;
    display_fqdn: string;
}

type UpdateDatabaseHostRequest = CreateDatabaseHostRequest

interface DeleteDatabaseHostRequest {
    id: number;
}

class DatabaseHostsService {
    getAll(req: PaginatableRequest): Promise<ListResponse> {
        return RequestService.get('/database-hosts', {
            ...req,
            include: 'node'
        })
            .then(Parser.parse);
    }

    get(): Promise<DatabaseHost> {
        return RequestService.get('/database-hosts/:databaseHost', {
            include: ['databases', 'databases.server']
        })
            .then(Parser.parse);
    }

    create(data: CreateDatabaseHostRequest): Promise<DatabaseHost> {
        return RequestService.post('/database-hosts', data)
            .then(Parser.parse);
    }

    update(data: UpdateDatabaseHostRequest): Promise<DatabaseHost> {
        return RequestService.put('/database-hosts/:databaseHost', data)
            .then(Parser.parse);
    }

    delete(data: DeleteDatabaseHostRequest): Promise<void> {
        return RequestService.delete(`/database-hosts/${data.id}`);
    }
}

export default new DatabaseHostsService();