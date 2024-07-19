import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

interface ListTask {
    id: number;
    title: string;
    status: boolean;
}

/**
 * Este evento pode devolver dois tipos de resposta
 */
const getAll = async (): Promise<ListTask[] | ApiException> => {
    try {
        /**
         * o await espera uma resposta a ser retornada,
         * por ser uma promise.
         * 
         * Aqui só estamos inserindo o contexto /tarefas
         * pois nos construtor da API já está definida a
         * baseUrl.
         */
        const { data } = await Api().get('/tarefas')

        return data
    } catch (error: any) {
        console.log(error)
        return new ApiException(error.message || 
            'Erro ao consultar a API')
    }
};

const getById = async (id: number): Promise<ListTask | ApiException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`)
        return data
    } catch (error: any) {
        console.log(error)
        return new ApiException(error.message || 
            'Erro ao consultar a API')
    }
};

/**
 * @param dataToCreate 
 * @returns 
 * Para criação, não é necessário enviar o id, e este
 * método Omit do React omite este parametro.
 */
const post = async (dataToCreate: Omit<ListTask, 'id'>): 
    Promise<ListTask | ApiException> => {
    try {
        const { data } = await Api().post<any>('/tarefas', dataToCreate)
        return data
    } catch (error: any) {
        console.log(error)
        return new ApiException(error.message || 
            'Erro ao criar tarefa na API')
    }
};

const putById = async (id: string, dataToUpdate: ListTask): 
    Promise<ListTask | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate)
        return data
    } catch (error: any) {
        console.log(error)
        return new ApiException(error.message || 
            'Erro ao atualizar a tarefa')
    }
};

/**
 * 
 * @param id 
 * @returns 
 * não há necessidade de retornar resultado se 
 * for executado com sucesso.
 */
const deleteById = async (id: string): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`)
        return undefined
    } catch (error: any) {
        console.log(error)
        return new ApiException(error.message || 
            'Erro ao remover a tarefa')
    }
};

export const TarefasService = {
    getAll,
    getById,
    post,
    putById,
    deleteById
};