import styled from "@emotion/styled";
import theme from "../theme";

const Line = styled("article")`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  align-items: center;
  padding: 5%;
  &:hover .close {
    background-position-x: -17px;
  }
  &:before {
    content: "";
    width: 90%;
    height: 2px;
    background-color: ${theme.colors.secondary};
    position: absolute;
    top: 0;
    left: 5%;
  }
`;

const ChangeQty = styled("button")`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: ${theme.colors.primary};
  background-color: #000;
  border: none;

  &.disabled {
    opacity: 0.2;
    cursor: default;
  }
`;

const Close = styled("span")`
  width: 16px;
  height: 16px;
  top: 15px;
  right: 5%;
  border-radius: 50%;
  position: absolute;
  background-size: auto 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAOCAYAAADT0Rc6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3NDA3MjA2ODExODA4MzlFRjgwMkJGMENDMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NzRFMzQ0QjI3MzgxMUU4QjRFMUVBNEJCODU5RDAzMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NzRFMzQ0QTI3MzgxMUU4QjRFMUVBNEJCODU5RDAzMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUE3RjExNzQwNzIwNjgxMUIxQTQ5QTgyNkJBMzJBOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDM4MDExNzQwNzIwNjgxMTgwODM5RUY4MDJCRjBDQzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5cNiR0AAAA50lEQVR42qSUaw6EMAiEYY8rB7JcVrYoNaQCNbsk88N2ypc+HICrtq69CyEvNM8mIuCk33sXTuNeaJ5zrRZ1HV361RIw2pyYd4Cp65CrWgJGmxPz6gbvZpKAMfJYw9FMEjBGntGUE3AEVC+6ppyAI6B60e8mAldAWIBD4LjTCvwAqjG5txkcAmdoBWZ/z8UL5RVQ9YF3JfB7lWtXx9v+ON4WHW8E5GTszUPiZOx+SBkQq7kFEKs5yH6LxbFn4cBBOHAUDj4GuYhBdjFIQQxyEYPsYpBGUypyd45DmppSkbtzHJ5rvwIMAKXLCXxfiHXkAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-position-x: -17px;
  }
`;

export { Line, ChangeQty, Close };
