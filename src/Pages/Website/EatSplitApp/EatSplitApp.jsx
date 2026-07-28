import { useState } from "react";
import { friends as initialFriends } from "../../../Data/friends";

const EatSplitApp = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleSelectFriend(friend) {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleCloseSplitBill() {
    setSelectedFriend(null);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleToggleAddFriend() {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null);
  }
  function handleSplitBill(friendId, value) {
    // بنحدّث الصديق بالـ id اللي جاي من الفورم نفسه بدل الاعتماد على selectedFriend عشان التحديث يفضل ثابت وواضح.
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === friendId
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
    setSelectedFriend(null);
  }

  return (
    <div className="lg:mx-auto grid max-w-6xl gap-10 lg:grid-cols-[420px_1fr] mx-4">
      <Sidebar
        selectedFriend={selectedFriend}
        showAddFriend={showAddFriend}
        onSelectFriend={handleSelectFriend}
        friends={friends}
        onAddFriend={handleAddFriend}
        onToggle={handleToggleAddFriend}
      />

      {selectedFriend && (
        <SplitBill
          key={selectedFriend.id}
          friend={selectedFriend}
          onSplitBill={handleSplitBill}
          onClose={handleCloseSplitBill}
        />
      )}
    </div>
  );
};
export default EatSplitApp;

const Sidebar = ({
  selectedFriend,
  showAddFriend,
  onSelectFriend,
  friends,
  onAddFriend,
  onToggle,
}) => {
  return (
    <div className="space-y-6">
      <FriendsList
        selectedFriend={selectedFriend}
        onSelectFriend={onSelectFriend}
        friends={friends}
      />

      {showAddFriend && <AddFriendForm onAddFriend={onAddFriend} />}
      <ButtonEatSpilt onClick={onToggle}>
        {showAddFriend ? "Close" : "Add Friend"}
      </ButtonEatSpilt>
    </div>
  );
};

const FriendsList = ({ selectedFriend, onSelectFriend, friends }) => {
  return (
    <div className="space-y-4 rounded-2xl bg-white p-5 shadow-xl">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </div>
  );
};

const Friend = ({ friend, selectedFriend, onSelectFriend }) => {
  const { image, name, balance } = friend;

  const isSelected = selectedFriend?.id === friend.id;

  return (
    <div
      className={`flex items-center justify-between rounded-xl border p-4 transition ${
        isSelected ? "bg-violet-100 border-violet-500" : "hover:bg-slate-50"
      }`}
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-bold">{name}</h3>

          {balance < 0 && (
            <p className="font-bold text-red-500">
              You owe {name} ${Math.abs(balance)}
            </p>
          )}

          {balance > 0 && (
            <p className="font-bold text-green-500">
              {name} owes you ${balance}
            </p>
          )}

          {balance === 0 && (
            <p className="font-bold text-slate-500">You and {name} are even</p>
          )}
        </div>
      </div>

      <button
        onClick={() => onSelectFriend(friend)}
        className="rounded bg-violet-600 px-4 py-2 font-semibold text-white"
      >
        {isSelected ? "X" : "💸"}
      </button>
    </div>
  );
};

const AddFriendForm = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("men");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !gender) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `https://randomuser.me/api/portraits/${gender}/${Math.floor(
        Math.random() * 100,
      )}.jpg`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setGender("men");
  };
  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl">
      <h2 className="mb-5 text-2xl font-bold">Add Friend</h2>

      <div className="space-y-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Friend Name"
            className="w-full rounded-xl border p-3"
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full my-3 rounded-xl border p-3"
          >
            <option value="men">Male</option>
            <option value="women">Female</option>
          </select>
          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white"
          >
            Add Friend
          </button>
        </form>
      </div>
    </div>
  );
};

const SplitBill = ({ friend, onClose, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill !== "" ? Number(bill) - Number(paidByUser) : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    const numericBill = Number(bill);
    const numericPaidByUser = Number(paidByUser);

    if (bill === "" || paidByUser === "") return;

    if (numericPaidByUser > numericBill) return;

    onSplitBill(
      friend.id,
      whoIsPaying === "user" ? paidByFriend : -numericPaidByUser,
    );
    setBill("");
    setPaidByUser("");
  }
  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <button
        onClick={onClose}
        className="float-end mr-4 rounded bg-violet-600 px-3 py-1 text-2xl font-semibold text-white transition hover:bg-violet-700"
      >
        ×
      </button>

      <h2 className="mb-8 text-3xl font-bold">
        Split a bill with {friend.name}
      </h2>

      <div className="space-y-6">
        <form onSubmit={handleSubmit}>
          <InputField
            label="Bill Value"
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="0"
          />

          <InputField
            label="Your Expense"
            type="number"
            value={paidByUser}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") return setPaidByUser("");
              if (Number(value) > Number(bill)) return;
              setPaidByUser(value);
            }}
            placeholder="0"
          />

          <InputField
            label={`${friend.name} Expense`}
            type="number"
            value={paidByFriend}
            placeholder="0"
            disabled
          />

          <SelectField
            friend={friend}
            setWhoIsPaying={setWhoIsPaying}
            whoIsPaying={whoIsPaying}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-3 text-lg font-semibold text-white"
          >
            Split Bill
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({
  value,
  type,
  label,
  placeholder,
  disabled,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="font-semibold">{label}</label>

      <input
        type={type || "text"}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-xl border p-3 my-2 disabled:bg-slate-100"
      />
    </div>
  );
};

const SelectField = ({ friend, whoIsPaying, setWhoIsPaying }) => {
  return (
    <div className="space-y-2">
      <label className="font-semibold">Who is paying the bill?</label>

      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
        className="w-full rounded-xl border p-3 my-3"
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
    </div>
  );
};

const ButtonEatSpilt = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" rounded-xl  bg-violet-600 py-3 px-4 text-lg font-semibold text-white"
    >
      {children}
    </button>
  );
};
