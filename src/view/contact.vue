<template>
  <div class="toiawase">
    <form aria-labelledby="formTitle">
      <h2 id="formTitle" class="formTitle">お問い合わせフォーム</h2>
      <hr />
      <div class="contactApp">
        <div class="name">
          <div class="labelName">
            <label for="name">お名前：</label>
          </div>
          <div class="inputName">
            <input
              id="name"
              type="text"
              required
              aria-required="true"
              v-model="name"
            />
          </div>
        </div>
        <div class="email">
          <div class="labelEmail">
            <label for="email">mail :</label>
          </div>
          <div class="inputEmail">
            <input
              id="email"
              type="email"
              placeholder="test@test.com"
              required
              aria-required="true"
              v-model="email"
            />
          </div>
        </div>
        <div class="call">
          <div class="labelCall">
            <label for="call">電話番号:</label>
          </div>
          <div class="inputCall">
            <input
              id="call"
              type="tel"
              maxlength="40"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              placeholder="000-000-000"
              required
              aria-required="true"
              v-model="tell"
            />
          </div>
        </div>
        <div class="contact">
          <div class="labelContact">
            <label for="text">お問い合わせ:</label>
          </div>
          <div class="inputContact">
            <textarea
              name="text"
              id="text"
              required
              aria-required="true"
              v-model="text"
            ></textarea>
          </div>
        </div>
        <hr />
        <button @click="createContact">
          送信
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      tell: "",
      text: "",
    };
  },
  methods: {
    createContact() {
      axios
        .post(
          "https://firestore.googleapis.com/v1/projects/naisou-f4e73/databases/(default)/documents/contacts",
          {
            fields: {
              name: {
                stringValue: this.name,
              },
              email: {
                stringValue: this.email,
              },
              tell: {
                stringValue: this.tell,
              },
              text: {
                stringValue: this.text,
              },
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
      window.alert("受付完了いたしました。");
    },
  },
};
</script>

<style scoped>
hr {
  border: 0;
  height: 7px;
  background-image: repeating-linear-gradient(
      45deg,
      #ccc 0,
      #ccc 1px,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 50%
    ),
    repeating-linear-gradient(
      135deg,
      #ccc 0,
      #ccc 1px,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 50%
    );
  background-size: 7px 7px;
  background-position: bottom center;
  background-repeat: repeat-x;
}

.formTitle {
  padding-top: 20px;
  margin: 0 0 70px 0;
}
.contactApp {
  padding-top: 50px;
  padding-bottom: 50px;
}
form {
  width: 500px;
  margin: 0 auto;
}
.name {
  display: flex;
  margin-bottom: 50px;
  padding-left: 9em;
}
.email {
  display: flex;
  margin-bottom: 50px;
  padding-left: 9em;
}
.call {
  display: flex;
  margin-bottom: 50px;
  padding-left: 9em;
}
.contact {
  display: flex;
  margin-bottom: 120px;
  padding-left: 9em;
}
.labelName {
  text-indent: -12em;
  padding-left: 2em;
  padding: 0;
}
.inputName {
  text-indent: -5em;
  padding-left: 5em;
}
.labelEmail {
  text-indent: -13em;
  padding-left: 2em;
  padding: 0;
}
.inputEmail {
  text-indent: -5em;
  padding-left: 5em;
}
.labelCall {
  text-indent: -12em;
  padding-left: 2em;
  padding: 0;
}
.inputCall {
  text-indent: -5em;
  padding-left: 5em;
}
.labelContact {
  text-indent: -11em;
  padding-left: 2em;
  padding: 0;
}
.inputContact {
  text-indent: -5em;
  padding-left: 5em;
}

button {
  margin-top: 15px;
}
@media screen and (max-width: 480px) {
  .inputCall {
    padding-left: 100px;
    width: 135px;
  }
  .inputContact {
    width: 139px;
    margin: 0 auto;
  }
  form {
    width: 360px;
  }
  .name {
    display: block;
    margin-bottom: 50px;
    padding-left: 3em;
    width: 235px;
  }
  .labelName {
    text-indent: 0em;
  }

  .email {
    display: block;
    margin-bottom: 50px;
    padding-left: 3em;
    width: 235px;
  }
  .labelEmail {
    text-indent: 0em;
  }

  .call {
    display: block;
    margin-bottom: 50px;
    padding-left: 3em;
    width: 235px;
  }
  .labelCall {
    text-indent: 0em;
  }
  .labelContact {
    text-indent: 0em;
  }
  .contact {
    display: block;
    margin-bottom: 50px;
    padding-left: 3em;
    padding-left: 0px;
  }
}
</style>
