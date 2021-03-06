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

var _TimelineMarkersContext = require('../TimelineMarkersContext');

var _markerType = require('../markerType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodayMarker = function (_React$Component) {
  _inherits(TodayMarker, _React$Component);

  function TodayMarker() {
    _classCallCheck(this, TodayMarker);

    return _possibleConstructorReturn(this, (TodayMarker.__proto__ || Object.getPrototypeOf(TodayMarker)).apply(this, arguments));
  }

  _createClass(TodayMarker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$subscribeMarke = this.props.subscribeMarker({
        type: _markerType.TimelineMarkerType.Today,
        renderer: this.props.children,
        interval: this.props.interval
      }),
          unsubscribe = _props$subscribeMarke.unsubscribe,
          getMarker = _props$subscribeMarke.getMarker;

      this.unsubscribe = unsubscribe;
      this.getMarker = getMarker;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.unsubscribe != null) {
        this.unsubscribe();
        this.unsubscribe = null;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.interval !== this.props.interval && this.getMarker) {
        var marker = this.getMarker();
        this.props.updateMarker(_extends({}, marker, {
          interval: this.props.interval
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return TodayMarker;
}(_react2.default.Component);

// TODO: turn into HOC?


TodayMarker.propTypes = {
  subscribeMarker: _propTypes2.default.func.isRequired,
  updateMarker: _propTypes2.default.func.isRequired,
  interval: _propTypes2.default.number,
  children: _propTypes2.default.func
};
TodayMarker.defaultProps = {
  interval: 1000 * 10 // default to ten seconds
};
var TodayMarkerWrapper = function TodayMarkerWrapper(props) {
  return _react2.default.createElement(
    _TimelineMarkersContext.TimelineMarkersConsumer,
    null,
    function (_ref) {
      var subscribeMarker = _ref.subscribeMarker,
          updateMarker = _ref.updateMarker;
      return _react2.default.createElement(TodayMarker, _extends({ subscribeMarker: subscribeMarker, updateMarker: updateMarker }, props));
    }
  );
};

TodayMarkerWrapper.displayName = 'TodayMarkerWrapper';

exports.default = TodayMarkerWrapper;