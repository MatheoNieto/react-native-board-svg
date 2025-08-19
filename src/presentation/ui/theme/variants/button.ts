export const buttonVariants = {
  defaults: {
    borderRadius: 's',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    px: 'm',
    py: {tablet: 'm', phone: 's'},
    minHeight: 50,
    fontWeight: '600',
    fontSize: {tablet: 22, phone: 17},
    letterSpacing: 0.049, // 0.049 => 0.0035em (fontSize 14)
  },

  smallMenu: {
    minHeight: 30,
    fontSize: 12,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
  },
  smallMenuActive: {
    backgroundColor: 'primaryBlue',
    minHeight: 30,
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
  },

  endType: {
    width: 100,
    backgroundColor: 'input',
    borderWidth: 1,
    borderColor: 'buttonBorder',
    height: 50,
    marginHorizontal: 'xs',
    marginTop: 's',
    fontSize: 20,
  },
};
