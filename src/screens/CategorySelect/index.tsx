import React from 'react';
import { FlatList, ViewProps } from 'react-native';

import { Button } from '../../components/Form/Button';

import { categories } from '../../utils/categories';

import * as S from './styles';

interface Category {
  key: string;
  name: string;
}

interface CategorySelectProps extends ViewProps {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
  ...props
}: CategorySelectProps) {
  return (
    <S.Container {...props}>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <S.Category
            isActive={category.key === item.key}
            onPress={() => setCategory(item)}
          >
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <Button title='Selecionar' onPress={closeSelectCategory} />
      </S.Footer>
    </S.Container>
  );
}
