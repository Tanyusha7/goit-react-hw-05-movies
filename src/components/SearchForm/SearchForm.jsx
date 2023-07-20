import { useState } from 'react';
import { Form, InputForm, BtnForm } from './SearchForm.styled';

const SearchForm = ({ onSearchMovie, setSearchParams }) => {
  const [query, setQuery] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = ({ target: { value } }) => {
    setQuery(value.toLowerCase().trim());
    setSearchParams({ query: value });
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (query === '') {
      return alert('Enter a search name');
    }
    onSearchMovie(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <InputForm
        type="text"
        autoComplete="off"
        onChange={handleChange}
        value={query}
      />
      <BtnForm type="submit">Search</BtnForm>
    </Form>
  );
};

export default SearchForm;
