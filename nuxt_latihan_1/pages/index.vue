<template>
  <section>
    <div>
      <!-- Komponen Dasar -->
      <p>Test 2</p>
      <h1>Test 3</h1>
      <h2>Test 4</h2>
      <h3>Test 5</h3>
      <h4>Test 6</h4>
      <h5>Test 7</h5>
      <h6>Test 8</h6>
      <a href="http://google.com">Go to google chrome</a>
      <br />

      <!-- P dan Span-->
      <p>Data Paragraph</p>
      <p>Data Paragraph 2</p>

      <span>Data Span 1</span>
      <span>Data Span 2</span>

      <!-- Komponen Form -->
      <br />
      <input type="text" v-model="nama_variable_text" />
      <br />
      <input type="number" />
      <br />
      <input type="file" />
      <br />
      <button @click="nama_function">Tambah</button>
      <button @click="nama_function">Kurang</button>
      <button @click="nama_function">Kali</button>
      <button @click="nama_function">Bagi</button>
      <br />

      <!-- Dasar Javascript -->
      <p>{{ nama_variable_text }}</p>
      {{ nama_variabel_bool }}
      <br />
      {{ nama_variabel_string }}
      <br />
    </div>
  </section>
</template>

<script setup>
// Variabel
const nama_variable = ref(3);
const nama_variabel_2 = ref(4);
const nama_variabel_string = ref("TEXT BEBAS");
const nama_variabel_bool = ref(false);
const nama_variable_text = ref("Ini data text");

/**
 * 'a'   = Char/ Character
 * "abc" = String / Kata
 */

// Tidak bisa dimulai dari
/**
 * 3nama_variable
 * (nama_variable
 * ,nama_variable
 */

const nama_function = () => {
  alert(nama_variable_text.value);
};
</script>

<style>
</style>