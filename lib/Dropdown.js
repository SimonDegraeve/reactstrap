'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _PopperContent = require('./PopperContent');

var _PopperContent2 = _interopRequireDefault(_PopperContent);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = require('./DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

var propTypes = {
  disabled: _propTypes2.default.bool,
  dropup: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  placementPrefix: _propTypes2.default.string,
  group: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  tag: _propTypes2.default.string,
  tether: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  toggle: _propTypes2.default.func,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};

var defaultProps = {
  isOpen: false,
  tag: 'div',
  placementPrefix: 'dropdown-menu'
};

var childContextTypes = {
  toggle: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool.isRequired
};

var i = 0;

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.addEvents = _this.addEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeEvents = _this.removeEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      document.addEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      var container = _reactDom2.default.findDOMNode(this);

      if (container.contains(e.target) && container !== e.target) {
        return;
      }

      this.toggle();
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.tether) {
        return;
      }

      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle();
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      var _omit = (0, _utils.omit)(this.props, ['toggle', 'tag']),
          children = _omit.children,
          dropup = _omit.dropup,
          right = _omit.right,
          attrs = _objectWithoutProperties(_omit, ['children', 'dropup', 'right']);

      return _react2.default.Children.map(_react2.default.Children.toArray(children), function (child) {
        if (child.type === _DropdownToggle2.default || child.props['data-toggle'] === 'dropdown') {
          _this2.id = _this2.id || child.props.id || 'dropdown-' + ++i;
          return _react2.default.cloneElement(child, { id: _this2.id });
        }
        if (child.type === _DropdownMenu2.default || child.props.type === 'dropdown-menu') {
          var position1 = 'bottom';
          var position2 = 'start';
          if (dropup) {
            position1 = 'top';
          }
          if (right) {
            position2 = 'end';
          }
          attrs.placement = position1 + '-' + position2;
          return _react2.default.createElement(
            _PopperContent2.default,
            _extends({}, attrs, { target: _this2.id }),
            child
          );
        }

        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _omit2 = (0, _utils.omit)(this.props, ['toggle', 'placementPrefix', 'right']),
          className = _omit2.className,
          cssModule = _omit2.cssModule,
          dropup = _omit2.dropup,
          group = _omit2.group,
          size = _omit2.size,
          Tag = _omit2.tag,
          isOpen = _omit2.isOpen,
          attributes = _objectWithoutProperties(_omit2, ['className', 'cssModule', 'dropup', 'group', 'size', 'tag', 'isOpen']);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, (_classNames = {
        'btn-group': group
      }, _defineProperty(_classNames, 'btn-group-' + size, !!size), _defineProperty(_classNames, 'dropdown', !group), _defineProperty(_classNames, 'show', isOpen), _defineProperty(_classNames, 'dropup', dropup), _classNames)), cssModule);

      return _react2.default.createElement(
        Tag,
        _extends({}, attributes, { className: classes }),
        this.renderChildren()
      );
    }
  }]);

  return Dropdown;
}(_react2.default.Component);

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
Dropdown.childContextTypes = childContextTypes;

exports.default = Dropdown;