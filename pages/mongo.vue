<script setup>
const { data: todo, refresh } = await useFetch("/api/people");

const todoArr = ref([]);

const peopleData = ref({
  name: "",
  email: "",
  age: "",
});

// 重置輸入資料
const resetData = () => {
  peopleData.value.name = "";
  peopleData.value.email = "";
  peopleData.value.age = "";
};

// 重組一下資料
// 新增跟刪除的資料都要加 parse，因為 template 有用到 isEdit，不加的話更新的資料跑不出來
const parse = () => {
  todoArr.value = todo.value.map((item) => ({
    ...item,
    isEdit: false,
  }));
};

// 切換編輯按鈕開關
const toggleEdit = async (item, idx) => {
  todoArr.value[idx].isEdit = !todoArr.value[idx].isEdit;
  if (!todoArr.value[idx].isEdit) {
    updateData(item);
  }
};

// PUT
const updateData = async (item) => {
  const { _id, name } = item;
  try {
    await $fetch("/api/people/update", {
      method: "PUT",
      body: { _id, name },
    });
  } catch (error) {
    alert(error);
    return error;
  }
};

// POST
const createPeople = async () => {
  const { name, email, age } = peopleData.value;
  await $fetch("/api/people/create", {
    method: "POST",
    body: { name, email, age },
  });
  await refresh();
  parse();
  resetData();
};

// DELETE
const deletePeople = async ({ _id }) => {
  try {
    await $fetch("/api/people/remove", {
      method: "DELETE",
      body: { _id },
    });
    await refresh();
    parse();
    resetData();
  } catch (error) {
    alert(error);
    return error;
  }
};

onMounted(() => {
  parse();
});
</script>

<template>
  <div class="app">
    <div class="todo_bar">
      <div class="input_box">
        <input
          v-model="peopleData.name"
          class="info"
          type="text"
          placeholder="名字"
        />
        <input
          v-model="peopleData.email"
          class="info"
          type="text"
          placeholder="信箱"
        />
        <input
          v-model="peopleData.age"
          class="info"
          type="text"
          placeholder="年齡"
        />
      </div>
      <button class="create" @click="createPeople">新增</button>
    </div>

    <div class="todo">
      <div class="todo_item" v-for="(item, idx) in todoArr" :key="item.email">
        <div class="todo_name">
          <p v-if="!item.isEdit">{{ item.name }}</p>
          <input
            v-else
            v-model="item.name"
            class="name_info"
            type="text"
            placeholder="名字"
          />
        </div>
        <div class="todo_update">
          <button class="put_btn" @click="toggleEdit(item, idx)">
            {{ !item.isEdit ? "edit" : "save" }}
          </button>
          <button class="remove_btn" @click="deletePeople(item)">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body,
#__nuxt {
  width: 100vw;
  height: 100vh;
  background-color: #6cb7da;
}
.app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.todo_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input.info {
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin: 0 2px;
}
button.create {
  width: 150px;
  height: 30px;
  border-radius: 20px;
  margin-top: 10px;
  background-color: #d77186;
  color: #fff;
  border: 2px solid #d75725;
  cursor: pointer;
  box-shadow: 0px 2px 0px rgb(180, 49, 75);
}
button.create:active {
  border: 2px solid #982b00;
  box-shadow: 0px 0px 0px rgb(152, 43, 0);
}
p {
  font-size: 26px;
  color: #fff;
  font-weight: bold;
}
.todo {
  margin-top: 50px;
}
.todo_item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.todo_name {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
input.name_info {
  width: 100px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin: 0 2px;
}
button.put_btn,
button.remove_btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 20px;
  margin: 0 2px;
}
.todo_update {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
