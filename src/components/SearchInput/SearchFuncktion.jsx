import * as Select from "@radix-ui/react-select";
import "@radix-ui/themes/styles.css";
import React, { useState } from "react";
import "./SearchStyle.css";
import { movieItemsSearch } from "./APISearchItem";
import { Link } from "react-router-dom";

export default () => {
  // You can use any api to generate list of countries

  const [value, setValue] = useState("");
  const [countries, setCountries] = React.useState(movieItemsSearch);

  const handleSearch = (e) => {
    const value = e.target.value;
    const results = movieItemsSearch.filter((item) =>
      item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setTimeout(() => setCountries(results), 100);
  };

  return (
    <div className="SearchContainerDisplay">
      <Select.Root
        onValueChange={setValue}
        onOpenChange={() => setCountries(movieItemsSearch)}
      >
        <div className="w-72 max-w-full">
          <Select.Trigger className="w-full inline-flex items-center justify-between px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
            <Select.Value placeholder="Search...">{value}</Select.Value>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              position="popper"
              avoidCollisions={false}
              className="w-[var(--radix-select-trigger-width)] overflow-hidden mt-3 bg-white border rounded-lg shadow-sm text-sm"
            >
              <div className="shadow flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="p-2 text-gray-500 w-full rounded-md outline-none"
                  onInput={handleSearch}
                />
              </div>
              <Select.Viewport className="max-h-64 mt-2 overflow-y-auto">
                {countries.length < 1 ? (
                  <div className="px-3 py-2 text-gray-600">Nothing found.</div>
                ) : (
                  ""
                )}
                {countries.map((item, idx) => (
                  <SelectItem key={idx} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </div>
      </Select.Root>
    </div>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    // If you want to make this component more customizable you can use classnames and tailwind-merge library.
    return (
      <Select.Item
        className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>
          <div className="pr-4 line-clamp-1">{children}</div>
        </Select.ItemText>
        <div className="w-6"></div>
      </Select.Item>
    );
  }
);
