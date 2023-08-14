import Icon from "@components/icons/Icons";

export const InputBox = () => {
  return (
    <div className="relative mt-3">
      <Icon name="mail" className="absolute top-3 left-2" />
      <input
        className="rounded border w-full pr-3.5 pl-10 py-2.5 bg-white "
        placeholder="billing@untitledui.com"
      ></input>
    </div>
  );
};
