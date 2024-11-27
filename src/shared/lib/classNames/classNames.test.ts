import { classNames } from './classNames';

describe('classNames', () => {
  test('base', () => {
    expect(classNames('class1')).toBe('class1');
  });
  test('with additional classes', () => {
    expect(classNames('', {}, ['class2', 'class3'])).toBe('class2 class3');
  });
  test('with moded classes', () => {
    expect(classNames('', { hovered: true, selected: true }))
      .toBe('hovered selected');
  });
  test('with all classes', () => {
    expect(classNames('class1', { hovered: true, selected: true }, ['class4']))
      .toBe('class1 class4 hovered selected');
  });
  test('with bad classes', () => {
    const expected = 'class1 selected';

    expect(classNames('class1', { hovered: false, selected: true }, ['']))
      .toBe(expected);
  });
});
