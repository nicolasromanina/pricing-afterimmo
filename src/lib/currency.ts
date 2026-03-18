/**
 * Currency conversion utility.
 * Base currency: EURO. Rates are approximate market rates.
 */

export type Currency = 'USD' | 'EURO' | 'FCA';

const RATES: Record<Currency, number> = {
  EURO: 1,
  USD: 1.08,
  FCA: 655.957,
};

const SYMBOLS: Record<Currency, string> = {
  EURO: '€',
  USD: '$',
  FCA: 'FCFA',
};

/**
 * Convert a EUR amount to the target currency and format it.
 * @param eurAmount - The amount in EUR (number)
 * @param currency - Target currency
 * @param showDecimals - Whether to show decimals (default false)
 */
export function convertPrice(eurAmount: number, currency: Currency, showDecimals = false): string {
  const converted = eurAmount * RATES[currency];
  const formatted = showDecimals
    ? converted.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    : Math.round(converted).toLocaleString('fr-FR');
  return formatted;
}

/**
 * Format a price string with currency symbol.
 * @param eurAmount - The amount in EUR
 * @param currency - Target currency
 * @param unit - Unit suffix like '/an', '/mois'
 */
export function formatPrice(eurAmount: number, currency: Currency, unit: string = ''): string {
  const amount = convertPrice(eurAmount, currency);
  const symbol = SYMBOLS[currency];
  if (currency === 'FCA') {
    return `${amount} ${symbol}${unit}`;
  }
  return `${amount}${symbol}${unit}`;
}

export function getCurrencySymbol(currency: Currency): string {
  return SYMBOLS[currency];
}
