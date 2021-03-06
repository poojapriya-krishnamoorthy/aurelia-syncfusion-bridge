'use strict';

System.register(['../common/widget-base', '../common/constants', '../common/decorators', '../common/common'], function (_export, _context) {
  "use strict";

  var WidgetBase, constants, generateBindables, customAttribute, inject, _dec, _dec2, _dec3, _class, ejTooltip;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
    }],
    execute: function () {
      _export('ejTooltip', ejTooltip = (_dec = customAttribute(constants.attributePrefix + 'tooltip'), _dec2 = generateBindables('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'showShadow', 'target', 'tip', 'title', 'trigger', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec3 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = function (_WidgetBase) {
        _inherits(ejTooltip, _WidgetBase);

        function ejTooltip(element) {
          _classCallCheck(this, ejTooltip);

          var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

          _this.element = element;
          return _this;
        }

        return ejTooltip;
      }(WidgetBase)) || _class) || _class) || _class));

      _export('ejTooltip', ejTooltip);
    }
  };
});