<template>
  <header>
    <nav id="nav">
      <ul>
        <li>
          <router-link class="btn-primary" to="/"> Home </router-link>
        </li>
        <li>
          <router-link class="btn-secondary" to="/amiibos">
            Amiibos
          </router-link>
        </li>
        <li>
          <router-link class="btn-tertiary" to="/collection">
            Collection
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
#nav {
  /* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; */
  padding-top: 25px;
}

#nav ul {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
}

#nav ul li {
  padding: 0;
  margin: 0;
  border-radius: 2px;
}

#nav a {
  font-weight: 500;
  font-size: 18px;
  border-radius: 25px;
  margin: 0 10px;
  padding: 5px 20px;
  text-decoration: none;
  color: #fff;
}

@media (max-width: 585px) {
  #nav ul {
    justify-content: center;
  }
}

@media (max-width: 585px) {
  #nav a {
    font-weight: 500;
    margin: 0 5px;
    padding: 5px 10px;
  }
}
</style>