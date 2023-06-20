import { from, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PlatformType } from '../shared/enums/platform-type';

export class PlatformConfig {
  public static platform: PlatformType;

  public static computePlatform(): Observable<PlatformType> {
    return this.extractUserAgent().pipe(
      map(userAgent => this.extractPlatformTypeFromUserAgent(userAgent)),
      tap(platform => (this.platform = platform))
    );
  }

  private static extractUserAgent(): Observable<string> {
    return of(window.navigator.userAgent);
  }

  private static extractPlatformTypeFromUserAgent(userAgent: string): PlatformType {
    const smartphoneRegex: RegExp = /android|iphone|iemobile|windows phone/i;
    const tabletRegex: RegExp = /tablet|ipad|android|opera mini/i;
    const pdaRegex: RegExp = /.*(EDA[0-9][0-9])/i;
    const innerWidth = window.innerWidth;

    if (!!userAgent && !!innerWidth && pdaRegex.test(userAgent.toLowerCase()) && innerWidth <= 640) {
      return PlatformType.PDA;
    } else if (!!userAgent && !!innerWidth && smartphoneRegex.test(userAgent.toLowerCase()) && innerWidth <= 640) {
      return PlatformType.MOBILE;
    } else if (!!userAgent && !!innerWidth && tabletRegex.test(userAgent.toLowerCase()) && innerWidth < 1366) {
      return PlatformType.TABLET;
    } else {
      return PlatformType.DESKTOP;
    }
  }
}

export function getPlatform(): PlatformType {
  return PlatformConfig.platform;
}
