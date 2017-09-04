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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPopper = require('react-popper');

var _PopperTargetHelper = require('./PopperTargetHelper');

var _PopperTargetHelper2 = _interopRequireDefault(_PopperTargetHelper);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  placement: _propTypes2.default.string,
  placementPrefix: _propTypes2.default.string,
  tag: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool.isRequired,
  cssModule: _propTypes2.default.object,
  wrapTag: _propTypes2.default.string,
  wrapClassName: _propTypes2.default.string,
  offset: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  fallbackPlacement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  target: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _utils.DOMElement]).isRequired
};

var defaultProps = {
  placement: 'auto',
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  wrapTag: 'span'
};

var PopperContent = function (_React$Component) {
  _inherits(PopperContent, _React$Component);

  function PopperContent(props) {
    _classCallCheck(this, PopperContent);

    var _this = _possibleConstructorReturn(this, (PopperContent.__proto__ || Object.getPrototypeOf(PopperContent)).call(this, props));

    _this.handlePlacementChange = _this.handlePlacementChange.bind(_this);
    _this.state = {};
    return _this;
  }

  _createClass(PopperContent, [{
    key: 'handlePlacementChange',
    value: function handlePlacementChange(data) {
      if (this.state.placement !== data.placement) {
        this.setState({ placement: data.placement });
      }
      return data;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          cssModule = _props.cssModule,
          children = _props.children,
          isOpen = _props.isOpen,
          target = _props.target,
          offset = _props.offset,
          fallbackPlacement = _props.fallbackPlacement,
          placementPrefix = _props.placementPrefix,
          className = _props.className,
          wrapTag = _props.wrapTag,
          wrapClassName = _props.wrapClassName,
          tag = _props.tag,
          attrs = _objectWithoutProperties(_props, ['cssModule', 'children', 'isOpen', 'target', 'offset', 'fallbackPlacement', 'placementPrefix', 'className', 'wrapTag', 'wrapClassName', 'tag']);

      var arrowClassName = (0, _utils.mapToCssModules)('arrow', cssModule);
      var placement = (this.state.placement || attrs.placement).split('-')[0];
      var managerClass = (0, _utils.mapToCssModules)(wrapClassName, this.props.cssModule);
      var popperClassName = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, placementPrefix ? placementPrefix + '-' + placement : placement), this.props.cssModule);

      var modifiers = {
        offset: { offset: offset },
        flip: { behavior: fallbackPlacement },
        update: {
          enabled: true,
          order: 950,
          fn: this.handlePlacementChange
        }
      };

      return _react2.default.createElement(
        _reactPopper.Manager,
        { tag: wrapTag, className: managerClass },
        _react2.default.createElement(_PopperTargetHelper2.default, { target: target }),
        isOpen && _react2.default.createElement(
          _reactPopper.Popper,
          _extends({ modifiers: modifiers }, attrs, { component: tag, className: popperClassName }),
          children,
          _react2.default.createElement(_reactPopper.Arrow, { className: arrowClassName })
        )
      );
    }
  }]);

  return PopperContent;
}(_react2.default.Component);

PopperContent.propTypes = propTypes;
PopperContent.defaultProps = defaultProps;

exports.default = PopperContent;