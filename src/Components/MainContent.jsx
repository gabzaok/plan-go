import { useEffect, useState } from "react";
import { ContentLeft } from "./ContentLeft";
import { ContentRight } from "./ContentRight";

export const MainContent = ({ setIsShowForm }) => {
  const [activities, setActivities] = useState([]);
  const [lastRemoved, setLastRemoved] = useState(null);
  const [editingActivity, setEditingActivity] = useState(null);

  const addActivity = (activity) => {
    setActivities((prev) => [...prev, activity]);
  };

  const startEdit = (activity) => {
    setEditingActivity(activity);
  };

  const removeActivity = (id) => {
    setActivities((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      const item = prev[index];

      setLastRemoved({ item, index });

      return prev.filter((activity) => activity.id !== id);
    });
  };

  const undoRemove = () => {
    if (!lastRemoved) return;

    setActivities((prev) => {
      const copy = [...prev];
      copy.splice(lastRemoved.index, 0, lastRemoved.item);
      return copy;
    });

    setLastRemoved(null);
  };

  const updateActivity = (updated) => {
    setActivities((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item)),
    );

    setEditingActivity(null);
  };

  const cancelEdit = () => {
    setEditingActivity(null);
  };

  useEffect(() => {
    if (!lastRemoved) return;

    const timer = setTimeout(() => {
      setLastRemoved(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [lastRemoved]);

  return (
    <div>
      <button
        onClick={() => setIsShowForm(false)}
        className="group fixed isolate mt-2 ml-2 flex cursor-pointer items-center justify-center overflow-hidden rounded-full before:absolute before:inset-0 before:translate-x-full before:bg-[#FFA53B] before:transition-transform before:duration-500 before:ease-in-out hover:before:translate-x-0"
      >
        <svg
          fill="#FFFFFF"
          className="h-8 w-8 rotate-270 justify-end rounded-full p-2 duration-300 ease-linear"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" />
        </svg>
      </button>

      <div className="flex h-screen items-center justify-center">
        <div className="my-28 flex rounded-3xl bg-[#1C262F]/60">
          <ContentLeft
            onSave={addActivity}
            onUpdate={updateActivity}
            editingActivity={editingActivity}
          />

          <ContentRight
            activities={activities}
            onDelete={removeActivity}
            onEdit={startEdit}
            editingActivity={editingActivity}
            onCancelEdit={cancelEdit}
          />
        </div>
      </div>
      {lastRemoved && (
        <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-xl bg-[#131A23] px-4 py-3 text-white shadow-lg">
          <span className="text-sm font-light">Atividade removida</span>

          <button
            onClick={undoRemove}
            className="text-sm font-medium text-[#FFA53B] hover:underline"
          >
            Desfazer
          </button>
        </div>
      )}
    </div>
  );
};
