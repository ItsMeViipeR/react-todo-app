"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const formSchema = z.object({
  todo: z.string().describe("What's next?")
});

type Todo = {
  text: string;
  done: boolean;
  id: number;
};

type TodoFormResult = {
  todo: string;
};

export default function Home() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([] as Todo[]);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
    setLoading(false);
  };

  useEffect(() => {
    loadTodos(); // Appel de la fonction pour charger les todos depuis le stockage local
  }, []);

  function addTodo(event: TodoFormResult) {
    // Add the new todo to the list
    const newTodo = { text: event.todo, done, id: Date.now() };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);

    // Save the updated list to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center py-2">
          <AutoForm formSchema={formSchema} onSubmit={addTodo}>
            <AutoFormSubmit />
          </AutoForm>
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-between w-full px-4 py-2 mb-4 rounded-md">
              <div className="grid grid-cols-4 gap-1 items-center max-[500px]:grid-cols-2" id="todos">
                {loading ? (
                  <Loader className="animate-spin" size={32} />
                ) : (
                  todos.map((todo) => (
                    <div
                      key={todo.id}
                      className="flex flex-row items-center justify-between w-full px-4 py-2 mb-4 bg-white border border-gray-300 rounded-md todo"
                    >
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={todo.done}
                          onChange={() => {
                            const updatedTodos = todos.map((t) => {
                              if (t.id === todo.id) {
                                return { ...t, done: !t.done };
                              }
                              return t;
                            });
                            setTodos(updatedTodos);
                            localStorage.setItem("todos", JSON.stringify(updatedTodos));
                          }}
                        />
                        <div className="custom-checkbox"></div>
                        <div className="">{todo.text}</div>
                        <Button variant={"ghost"} size="iconSm">
                          Delete
                        </Button>
                      </label>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
