import '../components/Tag.css';

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#4CAF50" },
    CSS: { backgroundColor: "#2196F3" },
    JavaScript: { backgroundColor: "#FFEB3B" },
    default: { backgroundColor: "#e0e0e0" },
  };

  return (
    <button
      type="button"
      className={`tag ${selected ? tagName : 'default'}`}
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
