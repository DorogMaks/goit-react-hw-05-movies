const Movies = () => {
  return (
    <section>
      <div>
        <form autoComplete="off">
          <input type="text" name="searchValue" />
          <button type="submit">Search</button>
        </form>
        <p>Let's find some movies</p>
      </div>
    </section>
  );
};

export default Movies;
