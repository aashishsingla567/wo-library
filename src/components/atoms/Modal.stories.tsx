import { useState } from "react";
import Modal from "./TempModal.js";

const metadata = {
  component: Modal,
};
export default metadata;

const Template = ({ open = false, ...args }) => {
  const [show, setShow] = useState(open);
  console.log(show);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal open={show} onClose={() => setShow(false)} {...args}>
        <div>
          <div>Click Me</div>
          <button onClick={() => setShow(false)}> Close </button>
        </div>
      </Modal>
    </div>
  );
};

export const Basic = {
  render: (args) => <Template {...args} />,
};

export const Open = {
  args: {
    open: true,
  },
  render: (args) => <Template {...args} />,
};
