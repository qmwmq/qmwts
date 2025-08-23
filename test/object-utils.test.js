import { describe, it, expect } from 'vitest'
import ObjectUtils from '../src/utils/object-utils'

const borderColor = '#ddd'

describe('test1', () => {
  it('merge empty object', () => {
    const o = ObjectUtils.merge({
      common: {
        // primary
        primaryColor: '#2196F3',
        primaryColorHover: '#42A5F5',
        primaryColorPressed: '#2962FF',
        primaryColorSuppl: '#42A5F5',
        // info
        infoColor: '#00BCD4',
        infoColorHover: '#26C6DA',
        infoColorPressed: '#00B8D4',
        infoColorSuppl: '#26C6DA',
        // success
        successColor: '#4CAF50',
        successColorHover: '#66BB6A',
        successColorPressed: '#00C853',
        successColorSuppl: '#66BB6A',
        // warning
        warningColor: '#CDDC39',
        warningColorHover: '#D4E157',
        warningColorPressed: '#AEEA00',
        warningColorSuppl: '#D4E157',
        // error
        errorColor: '#F44336',
        errorColorHover: '#EF5350',
        errorColorPressed: '#D50000',
        errorColorSuppl: '#EF5350',
      },
      Form: {
        feedbackHeightMedium: '10px',
        feedbackFontSizeMedium: '13px',
        feedbackPadding: '4px 0 8px 2px',
      },
      DataTable: {
        borderRadius: 0,
      },
    },
        {
          Layout: {
            colorEmbedded: '#000',
          },
        },
        {
          common: {
            borderColor
          },
          Layout: {
            colorEmbedded: '#f5f5f5',
          },
          DataTable: {
            borderColor,
            borderColorModal: borderColor, // 在modal中时的边框颜色
          },
          Tree: {
            lineColor: borderColor
          },
          Divider: {
            color: borderColor
          },
        }

    )
    console.log(o)
    // expect(o).toEqual({})
  })
})
