import 'node-fetch';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';
import { expect } from 'chai';
import { loadTodos } from '../thunks';

describe('The loadTodos thunk', () => {
    it('Dispaches the correct actions in the success scenario', async () => {
        const fakeDispatch = sinon.spy();

        const fakeTodos = [{ text: 'A' }, { text: 'B' }];
        fetchMock.get('http://localhost:8080/todos', fakeTodos);

        const expectedFirstAction = {
            type: 'LOAD_TODOS_IN_PROGRESS'
        };

        const expectedSecondAction = {
            type: 'LOAD_TODOS_SUCCESS',
            payload: {
                todos: fakeTodos
            },
        };

        await loadTodos()(fakeDispatch);

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

        fetchMock.reset();
    });
});