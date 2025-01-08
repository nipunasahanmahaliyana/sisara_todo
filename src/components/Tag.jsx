import '../components/Tag.css';

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#4CAF50" },
    CSS: { backgroundColor: "#2196F3" },
    JavaScript: { backgroundColor: "#FFEB3B" },
    React: { backgroundColor: "#61DBFB" },
    SpringBoot: { backgroundColor: "#FF5722" },
    ProjectManagement: { backgroundColor: "#9C27B0" },
    Sprint: { backgroundColor: "#FF9800" },
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
