import NativeButton from './NativeButton';

import React, {
  Component,
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  PropTypes,
} from 'react-native';

class Btn extends Component {

  static propTypes = Object.assign(
    {
      ...NativeButton.propTypes,
    },
    {
      panDimensions: PropTypes.object.isRequired,
      width: PropTypes.number.isRequired,
      onPress: PropTypes.func.isRequired,
      component: PropTypes.node,
      text: PropTypes.string,
      type: PropTypes.string,
    }
  );

  static defaultProps = {
    component: null,
    text: 'Click Me',
    type: null,
  };

  setTypeStyle(element) {
    switch (this.props.type) {
      case "danger":
      case "delete":
        return styles.btnDanger;
        break;
      case "primary":
        return styles.btnPrimary;
        break;
      case "secondary":
        return styles.btnSecondary;
        break;
      case "success":
        return styles.btnSuccess;
      default:
        return {};
        break;
    }
  }

  render() {
    let { panDimensions, style, text, width, component, type, ...btnProps } = this.props;
    let setWidth = { width: Math.ceil(width) };

    return (
      <Animated.View style={[panDimensions]}>
        <NativeButton {...btnProps} style={[styles.btn, this.setTypeStyle(), style]}>
          { component ?
            component
            :
            (<Text style={[styles.btnText, setWidth]}>{text}</Text>)
          }
        </NativeButton>
      </Animated.View>
    );
  }
}

/* Style */

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#b6bec0',
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  btnDanger: {
    backgroundColor: '#FF3B30',
  },
  btnPrimary: {
    backgroundColor: '#006fff',
  },
  btnSecondary: {
    backgroundColor: '#fd9427',
  },
  btnSuccess: {
    backgroundColor: '#4cd965',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Btn;
