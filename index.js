/**
 * Auto-executing async function that extends the String prototype with decoration features.
 *
 * @type {Promise<void> | void}
 */
export async function cli_decors(){
    /**
     * - stdout text decoration
     */
    await import( './extends/String/decoration/strong.js' )
    await import( './extends/String/decoration/underline.js' )
    /**
     * - stdout text colors
     */
    await import( './extends/String/color/fg/color.js' )
    await import( './extends/String/color/fg/black.js' )
    await import( './extends/String/color/fg/blue.js' )
    await import( './extends/String/color/fg/cyan.js' )
    await import( './extends/String/color/fg/green.js' )
    await import( './extends/String/color/fg/magenta.js' )
    await import( './extends/String/color/fg/red.js' )
    await import( './extends/String/color/fg/white.js' )
    await import( './extends/String/color/fg/yellow.js' )
    /**
     * - stdout brighter text colors
     */
    await import( './extends/String/color/fg/bright/black.js' )
    await import( './extends/String/color/fg/bright/blue.js' )
    await import( './extends/String/color/fg/bright/cyan.js' )
    await import( './extends/String/color/fg/bright/green.js' )
    await import( './extends/String/color/fg/bright/magenta.js' )
    await import( './extends/String/color/fg/bright/red.js' )
    await import( './extends/String/color/fg/bright/white.js' )
    await import( './extends/String/color/fg/bright/yellow.js' )
    /**
     * - stdout background colors
     */
    await import( './extends/String/color/bg/color.js' )
    await import( './extends/String/color/bg/black.js' )
    await import( './extends/String/color/bg/blue.js' )
    await import( './extends/String/color/bg/cyan.js' )
    await import( './extends/String/color/bg/green.js' )
    await import( './extends/String/color/bg/magenta.js' )
    await import( './extends/String/color/bg/red.js' )
    await import( './extends/String/color/bg/white.js' )
    await import( './extends/String/color/bg/yellow.js' )
    /**
     * - stdout brighter background colors
     */
    await import( './extends/String/color/bg/bright/black.js' )
    await import( './extends/String/color/bg/bright/blue.js' )
    await import( './extends/String/color/bg/bright/cyan.js' )
    await import( './extends/String/color/bg/bright/green.js' )
    await import( './extends/String/color/bg/bright/magenta.js' )
    await import( './extends/String/color/bg/bright/red.js' )
    await import( './extends/String/color/bg/bright/white.js' )
    await import( './extends/String/color/bg/bright/yellow.js' )
    /**
     * - reset foreground color, background color or decorations
     */
    await import( './extends/String/color/reset.js' )
    /**
     * - reverse foreground color and background color
     */
    await import( './extends/String/color/reset.js' )
}
