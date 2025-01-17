import { Chooser } from './index';

describe('Chooser', () => {
  describe('getStateFromHTML', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
    });

    test('CT1: input.value é true', () => {
      document.body.innerHTML = `<div id="my-chooser-chooser">
        <input id="my-chooser" value="123" />
      </div>`;
      const chooser = new Chooser('my-chooser');
      const state = chooser.getStateFromHTML();
      expect(state).toEqual({ id: '123' });
    });

    test('CT2: input.value é false', () => {
      document.body.innerHTML = `<div id="my-chooser-chooser">
        <input id="my-chooser" value="" />
      </div>`;
      const chooser = new Chooser('my-chooser');
      const state = chooser.getStateFromHTML();
      expect(state).toEqual(null);
    });

    test('CT3: input.value, titleElement, titleStateKey são true', () => {
      document.body.innerHTML = `<div id="my-chooser-chooser">
        <input id="my-chooser" value="123" />
        <span data-chooser-title>Título teste</span>
      </div>`;
      const chooser = new Chooser('my-chooser', { titleStateKey: 'title' });
      const state = chooser.getStateFromHTML();
      expect(state).toEqual({ id: '123', title: 'Título teste' });
    });

    test('CT4: titleElement é false', () => {
        document.body.innerHTML = `<div id="my-chooser-chooser">
        <input id="my-chooser" value="123" />
      </div>`;
        const chooser = new Chooser('my-chooser', { titleStateKey: 'title' });
        const state = chooser.getStateFromHTML();
        expect(state).toEqual({ id: '123' });
        });

    test('CT5: titleStateKey é true', () => {
      document.body.innerHTML = `<div id="my-chooser-chooser">
        <input id="my-chooser" value="123" />
        <span data-chooser-title>Título teste</span>
      </div>`;
      const chooser = new Chooser('my-chooser', { titleStateKey: 'title' });
      const state = chooser.getStateFromHTML();
      expect(state).toEqual({ id: '123', title: 'Título teste' });
    });

    test('CT6: titleStateKey é false', () => {
      document.body.innerHTML = `<div id="my-chooser-chooser">
        <input id="my-chooser" value="123" />
        <span data-chooser-title>Título teste</span>
      </div>`;
      const chooser = new Chooser('my-chooser');
      const state = chooser.getStateFromHTML();
      expect(state).toEqual({ id: '123', title: 'Título teste' });
    });

    test('CT7: input.value, titleElement, titleStateKey, editLink, editUrlStateKey são true', () => {
      document.body.innerHTML = `<div id="my-chooser-chooser">
        <input id="my-chooser" value="123" />
        <span data-chooser-title>Título teste</span>
        <a data-chooser-edit-link href="/my-edit-url">Editar</a>
      </div>`;
      const chooser = new Chooser('my-chooser', { titleStateKey: 'title', editUrlStateKey: 'edit_url' });
      const state = chooser.getStateFromHTML();
      expect(state).toEqual({ id: '123', title: 'Título teste', edit_url: '/my-edit-url' });
    });

    test('CT8: editLink é false', () => {
      document.body.innerHTML = `<div id="my-chooser-chooser">
        <input id="my-chooser" value="123" />
        <span data-chooser-title>Título teste</span>
      </div>`;
      const chooser = new Chooser('my-chooser', { titleStateKey: 'title', editUrlStateKey: 'edit_url' });
      const state = chooser.getStateFromHTML();
      expect(state).toEqual({ id: '123', title: 'Título teste' });
    });

    test('CT9: editUrlStateKey é true', () => {
      document.body.innerHTML = `<div id="my-chooser-chooser">
        <input id="my-chooser" value="123" />
        <span data-chooser-title>Título teste</span>
        <a data-chooser-edit-link href="/my-edit-url">Editar</a>
      </div>`;
      const chooser = new Chooser('my-chooser', { titleStateKey: 'title', editUrlStateKey: 'edit_url' });
      const state = chooser.getStateFromHTML();
      expect(state).toEqual({ id: '123', title: 'Título teste', edit_url: '/my-edit-url' });
    });

    test('CT10: editUrlStateKey é false', () => {
      document.body.innerHTML = `<div id="my-chooser-chooser">
        <input id="my-chooser" value="123" />
        <span data-chooser-title>Título teste</span>
        <a data-chooser-edit-link href="/my-edit-url">Editar</a>
      </div>`;
      const chooser = new Chooser('my-chooser', { titleStateKey: 'title' });
      const state = chooser.getStateFromHTML();
      expect(state).toEqual({ id: '123', title: 'Título teste', edit_url: '/my-edit-url' });
    });
  });
});