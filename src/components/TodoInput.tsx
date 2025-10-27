import React, { useState } from "react";

type AddTaskFormProps = {
  onAddTask: (text: string, priority: "Rendah" | "Sedang" | "Tinggi") => void;
};

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<"Rendah" | "Sedang" | "Tinggi">("Rendah");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text, priority);
    setText("");
    setPriority("Rendah");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 mb-4">
      <input
        type="text"
        placeholder="Tambahkan tugas..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border rounded flex-1"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as "Rendah" | "Sedang" | "Tinggi")}
        className="p-2 border rounded"
      >
        <option value="Rendah">Rendah</option>
        <option value="Sedang">Sedang</option>
        <option value="Tinggi">Tinggi</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Tambah
      </button>
    </form>
  );
};

export default AddTaskForm;
