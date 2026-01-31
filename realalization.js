import { Form } from "./form.js";
import { Modal } from "./modal.js";

const modal = new Modal('modal');
modal.open();
modal.close();
modal.initButton();

const form = new Form('#modal-form');